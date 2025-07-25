<template>
  <div class="w-full h-full flex flex-row">
    <ScrollArea class="w-64 border-r h-full px-2">
      <div class="py-2">
        <draggable
          v-model="sortedProviders"
          item-key="id"
          handle=".drag-handle"
          class="space-y-2"
          @end="handleDragEnd"
        >
          <template #item="{ element: provider }">
            <div
              :class="[
                'flex flex-row hover:bg-accent  items-center gap-2 rounded-lg p-2 cursor-pointer group',
                route.params?.providerId === provider.id
                  ? 'bg-secondary text-secondary-foreground'
                  : ''
              ]"
              @click="setActiveProvider(provider.id)"
            >
              <Icon
                icon="lucide:grip-vertical"
                class="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 cursor-move drag-handle"
              />
              <ModelIcon
                :model-id="provider.id"
                :custom-class="'w-4 h-4 text-muted-foreground'"
                :is-dark="themeStore.isDark"
              />
              <span class="text-sm font-medium flex-1" :dir="languageStore.dir">{{
                t(provider.name)
              }}</span>
              <Switch :checked="provider.enable" @click.stop="toggleProviderStatus(provider)" />
            </div>
          </template>
        </draggable>

        <div
          class="flex flex-row items-center gap-2 rounded-lg p-2 cursor-pointer hover:bg-accent mt-2"
          :dir="languageStore.dir"
          @click="openAddProviderDialog"
        >
          <Icon icon="lucide:plus" class="w-4 h-4 text-muted-foreground" />
          <span class="text-sm font-medium">{{ t('settings.provider.addCustomProvider') }}</span>
        </div>
      </div>
    </ScrollArea>
    <template v-if="activeProvider">
      <OllamaProviderSettingsDetail
        v-if="activeProvider.apiType === 'ollama'"
        :key="`ollama-${activeProvider.id}`"
        :provider="activeProvider"
        class="flex-1"
      />
      <ModelProviderSettingsDetail
        v-else
        :key="`standard-${activeProvider.id}`"
        :provider="activeProvider"
        class="flex-1"
      />
    </template>
    <AddCustomProviderDialog
      v-model:open="isAddProviderDialogOpen"
      @provider-added="handleProviderAdded"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import { useRoute, useRouter } from 'vue-router'
import ModelProviderSettingsDetail from './ModelProviderSettingsDetail.vue'
import OllamaProviderSettingsDetail from './OllamaProviderSettingsDetail.vue'
import ModelIcon from '@/components/icons/ModelIcon.vue'
import { Icon } from '@iconify/vue'
import AddCustomProviderDialog from './AddCustomProviderDialog.vue'
import { useI18n } from 'vue-i18n'
import type { LLM_PROVIDER } from '@shared/presenter'
import { Switch } from '@/components/ui/switch'
import draggable from 'vuedraggable'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useThemeStore } from '@/stores/theme'
import { useLanguageStore } from '@/stores/language'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const languageStore = useLanguageStore()
const settingsStore = useSettingsStore()
const themeStore = useThemeStore()
const isAddProviderDialogOpen = ref(false)

// 创建一个计算属性来处理排序后的providers
const sortedProviders = computed({
  get: () => settingsStore.sortedProviders,
  set: (newProviders) => {
    // 更新 store 中的 providers 顺序
    settingsStore.updateProvidersOrder(newProviders)
  }
})

const setActiveProvider = (providerId: string) => {
  router.push({
    name: 'settings-provider',
    params: {
      providerId
    }
  })
}

const toggleProviderStatus = async (provider: LLM_PROVIDER) => {
  await settingsStore.updateProviderStatus(provider.id, !provider.enable)
  // 切换状态后，同时打开该服务商的详情页面
  setActiveProvider(provider.id)
}

const activeProvider = computed(() => {
  return settingsStore.providers.find((p) => p.id === route.params.providerId)
})

const openAddProviderDialog = () => {
  isAddProviderDialogOpen.value = true
}

const handleProviderAdded = (provider: LLM_PROVIDER) => {
  // 添加成功后，自动选择新添加的provider
  setActiveProvider(provider.id)
}

// 处理拖拽结束事件
const handleDragEnd = () => {
  // 可以在这里添加额外的处理逻辑
}
</script>

<style scoped>
.drag-handle {
  touch-action: none;
}
</style>
