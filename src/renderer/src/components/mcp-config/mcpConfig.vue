<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useMcpStore } from '@/stores/mcp'
import type { MCPServerConfig, MCPToolDefinition } from '@shared/presenter'
import { useI18n } from 'vue-i18n'
import McpServerForm from './mcpServerForm.vue'

// 使用MCP Store
const mcpStore = useMcpStore()
// 国际化
const { t } = useI18n()

// 本地UI状态
const activeTab = ref<'servers' | 'tools'>('servers')
const isAddServerDialogOpen = ref(false)
const isEditServerDialogOpen = ref(false)
const isResetConfirmDialogOpen = ref(false)
const isRemoveConfirmDialogOpen = ref(false)
const selectedServer = ref<string>('')
const selectedTool = ref<MCPToolDefinition | null>(null)

// 将toolInputs和toolResults移到本地组件
const localToolInputs = ref<Record<string, string>>({})
const localToolResults = ref<Record<string, string>>({})
const jsonError = ref<Record<string, boolean>>({})

// 当选择工具时，初始化本地输入
watch(selectedTool, (newTool) => {
  if (newTool) {
    const toolName = newTool.function.name
    if (!localToolInputs.value[toolName]) {
      localToolInputs.value[toolName] = '{}'
    }
    jsonError.value[toolName] = false
  }
})

// 验证JSON格式
const validateJson = (input: string, toolName: string): boolean => {
  try {
    JSON.parse(input)
    jsonError.value[toolName] = false
    return true
  } catch (e) {
    jsonError.value[toolName] = true
    return false
  }
}

// 选择工具
const selectTool = (tool: MCPToolDefinition) => {
  selectedTool.value = tool
}

// 添加服务器
const handleAddServer = async (serverName: string, serverConfig: MCPServerConfig) => {
  const success = await mcpStore.addServer(serverName, serverConfig)
  if (success) {
    isAddServerDialogOpen.value = false
  }
}

// 编辑服务器
const handleEditServer = async (serverName: string, serverConfig: Partial<MCPServerConfig>) => {
  const success = await mcpStore.updateServer(serverName, serverConfig)
  if (success) {
    isEditServerDialogOpen.value = false
    selectedServer.value = ''
  }
}

// 删除服务器
const handleRemoveServer = async (serverName: string) => {
  selectedServer.value = serverName
  isRemoveConfirmDialogOpen.value = true
}

// 确认删除服务器
const confirmRemoveServer = async () => {
  const serverName = selectedServer.value
  await mcpStore.removeServer(serverName)
  isRemoveConfirmDialogOpen.value = false
}

// 设置默认服务器
const handleSetDefaultServer = async (serverName: string) => {
  await mcpStore.setDefaultServer(serverName)
}

// 启动/停止服务器
const handleToggleServer = async (serverName: string) => {
  const success = await mcpStore.toggleServer(serverName)
  if (!success) {
    // 显示错误提示
    const isRunning = mcpStore.serverStatuses[serverName]
    alert(
      `${serverName} ${isRunning ? t('settings.mcp.stopped') : t('settings.mcp.running')}${t('common.error.requestFailed')}`
    )
  }
}

// 恢复默认服务
const handleResetToDefaultServers = async () => {
  const success = await mcpStore.resetToDefaultServers()
  if (success) {
    isResetConfirmDialogOpen.value = false
  } else {
    alert(t('common.error.requestFailed'))
  }
}

// 打开编辑服务器对话框
const openEditServerDialog = (serverName: string) => {
  selectedServer.value = serverName
  isEditServerDialogOpen.value = true
}

// 调用工具
const callTool = async (toolName: string) => {
  if (!validateJson(localToolInputs.value[toolName], toolName)) {
    return
  }

  try {
    // 调用工具前更新全局store里的参数
    const params = JSON.parse(localToolInputs.value[toolName])
    // 设置全局store参数，以便mcpStore.callTool能使用
    mcpStore.toolInputs[toolName] = params

    // 调用工具
    const result = await mcpStore.callTool(toolName)
    if (result) {
      localToolResults.value[toolName] = result.content || ''
    }
    return result
  } catch (error) {
    console.error('调用工具出错:', error)
    localToolResults.value[toolName] = String(error)
  }
  return
}

// 监听标签切换
watch(activeTab, async (newTab) => {
  if (newTab === 'tools') {
    await mcpStore.loadTools()
    await mcpStore.loadClients()
  }
})

// 生命周期钩子
onMounted(async () => {
  if (activeTab.value === 'tools') {
    await mcpStore.loadTools()
    await mcpStore.loadClients()
  }
})
</script>

<template>
  <div class="h-full flex flex-col overflow-hidden">
    <!-- 选项卡 -->
    <div class="flex border-b mb-4 px-4">
      <button
        class="px-3 py-1.5 text-sm"
        :class="
          activeTab === 'servers'
            ? 'border-b-2 border-primary font-medium text-primary'
            : 'text-muted-foreground'
        "
        @click="activeTab = 'servers'"
      >
        {{ t('settings.mcp.tabs.servers') }}
      </button>
      <button
        class="px-3 py-1.5 text-sm ml-2"
        :class="
          activeTab === 'tools'
            ? 'border-b-2 border-primary font-medium text-primary'
            : 'text-muted-foreground'
        "
        @click="activeTab = 'tools'"
      >
        {{ t('settings.mcp.tabs.tools') }}
      </button>
    </div>

    <div class="flex-grow overflow-hidden px-4">
      <!-- 服务器配置选项卡 -->
      <div v-if="activeTab === 'servers'" class="h-full overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-base font-medium">{{ t('settings.mcp.serverList') }}</h3>
          <div class="flex space-x-2">
            <Dialog v-model:open="isResetConfirmDialogOpen">
              <DialogTrigger as-child>
                <Button variant="outline" size="sm">
                  <Icon icon="lucide:refresh-cw" class="mr-2 h-4 w-4" />
                  {{ t('settings.mcp.resetToDefault') }}
                </Button>
              </DialogTrigger>
              <DialogContent class="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{{ t('settings.mcp.resetConfirmTitle') }}</DialogTitle>
                  <DialogDescription>
                    {{ t('settings.mcp.resetConfirmDescription') }}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" @click="isResetConfirmDialogOpen = false">
                    {{ t('common.cancel') }}
                  </Button>
                  <Button variant="default" @click="handleResetToDefaultServers">
                    {{ t('settings.mcp.resetConfirm') }}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog v-model:open="isAddServerDialogOpen">
              <DialogTrigger as-child>
                <Button variant="outline" size="sm">
                  <Icon icon="lucide:plus" class="mr-2 h-4 w-4" />
                  {{ t('settings.mcp.addServer') }}
                </Button>
              </DialogTrigger>
              <DialogContent class="w-[640px] px-0 h-[80vh] flex flex-col">
                <DialogHeader class="px-4 flex-shrink-0">
                  <DialogTitle>{{ t('settings.mcp.addServerDialog.title') }}</DialogTitle>
                </DialogHeader>
                <McpServerForm @submit="handleAddServer" />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div v-if="mcpStore.configLoading" class="flex justify-center py-8">
          <Icon icon="lucide:loader" class="h-8 w-8 animate-spin" />
        </div>

        <div
          v-else-if="mcpStore.serverList.length === 0"
          class="text-center py-8 text-muted-foreground text-lg"
        >
          {{ t('settings.mcp.noServersFound') }}
        </div>

        <div v-else class="space-y-4 pb-4">
          <div
            v-for="server in mcpStore.serverList"
            :key="server.name"
            class="border rounded-lg overflow-hidden bg-card"
          >
            <div class="flex items-center p-4">
              <div class="flex-1">
                <div>
                  <div class="flex items-center">
                    <span class="text-xl mr-2">{{ server.icons }}</span>
                    <h4 class="text-sm font-medium">{{ server.name }}</h4>
                    <span
                      :class="[
                        'ml-2 px-2 py-0.5 text-xs rounded-full',
                        server.isRunning
                          ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                      ]"
                    >
                      {{ server.isRunning ? t('settings.mcp.running') : t('settings.mcp.stopped') }}
                    </span>
                  </div>
                  <p class="text-xs text-muted-foreground mt-1">{{ server.descriptions }}</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        class="h-8 w-8 rounded-lg text-muted-foreground"
                        :disabled="mcpStore.configLoading"
                        @click="handleToggleServer(server.name)"
                      >
                        <Icon
                          v-if="mcpStore.serverLoadingStates[server.name]"
                          icon="lucide:loader"
                          class="h-4 w-4 animate-spin"
                        />
                        <Icon
                          v-else
                          :icon="server.isRunning ? 'lucide:square' : 'lucide:play'"
                          class="h-4 w-4"
                        />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {{
                          server.isRunning
                            ? t('settings.mcp.stopServer')
                            : t('settings.mcp.startServer')
                        }}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        class="h-8 w-8 rounded-lg text-muted-foreground"
                        :disabled="server.isDefault || mcpStore.configLoading"
                        @click="handleSetDefaultServer(server.name)"
                      >
                        <Icon icon="lucide:check-circle" class="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{{ t('settings.mcp.setAsDefault') }}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        class="h-8 w-8 rounded-lg text-muted-foreground"
                        :disabled="mcpStore.configLoading"
                        @click="openEditServerDialog(server.name)"
                      >
                        <Icon icon="lucide:edit" class="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{{ t('settings.mcp.editServer') }}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        class="h-8 w-8 rounded-lg text-muted-foreground"
                        :disabled="mcpStore.configLoading"
                        @click="handleRemoveServer(server.name)"
                      >
                        <Icon icon="lucide:trash" class="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{{ t('settings.mcp.removeServer') }}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div class="bg-muted dark:bg-zinc-800 px-4 py-2">
              <div class="flex justify-between items-center">
                <div class="text-xs font-mono overflow-x-auto whitespace-nowrap">
                  {{ server.command }} {{ server.args.join(' ') }}
                </div>
                <span
                  v-if="server.isDefault"
                  class="ml-2 px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full shrink-0"
                >
                  {{ t('settings.mcp.default') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 调试工具选项卡 -->
      <div
        v-if="activeTab === 'tools'"
        class="h-full overflow-hidden grid grid-cols-[200px_1fr] gap-2"
      >
        <!-- 左侧工具列表 -->
        <div class="h-full border-r pr-2 flex flex-col">
          <Input
            type="text"
            class="w-full h-7 px-2 text-xs rounded-md border mb-2"
            :placeholder="t('mcp.tools.searchPlaceholder')"
          />
          <ScrollArea class="w-full h-0 grow">
            <div v-if="mcpStore.toolsLoading" class="flex justify-center py-4">
              <Icon icon="lucide:loader" class="h-6 w-6 animate-spin" />
            </div>

            <div
              v-else-if="mcpStore.tools.length === 0"
              class="text-center py-4 text-sm text-muted-foreground"
            >
              {{ t('mcp.tools.noToolsAvailable') }}
            </div>

            <div v-else class="space-y-1">
              <div
                v-for="tool in mcpStore.tools"
                :key="tool.function.name"
                class="p-2 rounded-md cursor-pointer hover:bg-accent text-sm"
                :class="{ 'bg-accent': selectedTool?.function.name === tool.function.name }"
                @click="selectTool(tool)"
              >
                <div class="font-medium">{{ tool.function.name }}</div>
                <div class="text-xs text-muted-foreground line-clamp-2 mt-1">
                  {{ tool.function.description }}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>

        <!-- 右侧操作区域 -->
        <div class="h-full overflow-y-auto px-2">
          <div v-if="!selectedTool" class="text-center text-sm text-muted-foreground py-8">
            {{ t('mcp.tools.selectTool') }}
          </div>

          <div v-else>
            <div class="mb-3">
              <h3 class="text-sm font-medium">{{ selectedTool.function.name }}</h3>
              <p class="text-xs text-muted-foreground">{{ selectedTool.function.description }}</p>
            </div>

            <!-- 工具参数输入 -->
            <div class="space-y-3 mb-3">
              <div class="space-y-1">
                <label class="text-xs font-medium">
                  {{ t('mcp.tools.parameters') }}
                  <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="localToolInputs[selectedTool.function.name]"
                  class="flex h-24 w-full rounded-md border border-input bg-transparent px-2 py-1.5 text-xs shadow-sm transition-colors file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                  placeholder="{}"
                  :class="{ 'border-red-500': jsonError[selectedTool.function.name] }"
                  @input="
                    validateJson(
                      localToolInputs[selectedTool.function.name],
                      selectedTool.function.name
                    )
                  "
                ></textarea>
              </div>
            </div>

            <!-- 调用按钮和结果显示 -->
            <div class="space-y-3">
              <Button
                class="w-full"
                :disabled="
                  mcpStore.toolLoadingStates[selectedTool.function.name] ||
                  jsonError[selectedTool.function.name]
                "
                @click="callTool(selectedTool.function.name)"
              >
                <Icon
                  v-if="mcpStore.toolLoadingStates[selectedTool.function.name]"
                  icon="lucide:loader"
                  class="mr-2 h-4 w-4 animate-spin"
                />
                {{
                  mcpStore.toolLoadingStates[selectedTool.function.name]
                    ? t('mcp.tools.runningTool')
                    : t('mcp.tools.executeButton')
                }}
              </Button>

              <div v-if="localToolResults[selectedTool.function.name]" class="mt-3">
                <div class="text-sm font-medium mb-1">{{ t('mcp.tools.resultTitle') }}</div>
                <pre class="bg-muted p-3 rounded-md text-sm overflow-auto">{{
                  localToolResults[selectedTool.function.name]
                }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 编辑服务器对话框 -->
  <Dialog v-model:open="isEditServerDialogOpen">
    <DialogContent class="w-[640px] px-0 h-[80vh] flex flex-col">
      <DialogHeader class="px-4 flex-shrink-0">
        <DialogTitle>{{ t('settings.mcp.editServerDialog.title') }}</DialogTitle>
      </DialogHeader>
      <McpServerForm
        v-if="selectedServer && mcpStore.config.mcpServers[selectedServer]"
        :server-name="selectedServer"
        :initial-config="mcpStore.config.mcpServers[selectedServer]"
        :edit-mode="true"
        @submit="(name, config) => handleEditServer(name, config)"
      />
    </DialogContent>
  </Dialog>

  <!-- 删除服务器确认对话框 -->
  <Dialog v-model:open="isRemoveConfirmDialogOpen">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{{ t('settings.mcp.removeServerDialog.title') }}</DialogTitle>
        <DialogDescription>
          {{ t('settings.mcp.confirmRemoveServer', { name: selectedServer }) }}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline" @click="isRemoveConfirmDialogOpen = false">
          {{ t('common.cancel') }}
        </Button>
        <Button variant="destructive" @click="confirmRemoveServer">
          {{ t('common.confirm') }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
