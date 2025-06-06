<template>
  <div
    class="z-50 relative min-w-[180px] rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
  >
    <div v-if="isCategoryView" class="text-xs text-muted-foreground pb-1 px-1">
      {{ currentCategory }}
    </div>
    <div v-if="displayItems.length > 0" class="max-h-64 overflow-y-auto">
      <button
        v-for="(item, index) in displayItems"
        :key="index"
        :ref="(el) => (itemElements[index] = el)"
        class="relative flex cursor-default hover:bg-accent select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full text-left"
        :class="[index === selectedIndex ? 'bg-accent' : '']"
        @click="selectItem(index)"
      >
        <Icon v-if="item.icon" :icon="item.icon" class="size-4 shrink-0" />
        <div class="font-medium flex-1 truncate">{{ item.label }}</div>
        <Icon
          v-if="item.type === 'category'"
          icon="lucide:chevron-right"
          class="size-4 shrink-0"
        ></Icon>
      </button>
    </div>
    <div v-else class="p-1 text-sm text-muted-foreground">No result</div>
    <div
      v-if="displayItems[selectedIndex]?.description"
      class="absolute text-muted-foreground shadow-sm top-[-1px] right-[-328px] w-[320px] max-h-64 bg-card rounded-md p-2 border text-xs overflow-y-auto"
    >
      <div class="font-medium pb-1 border-b border-dashed">Description</div>
      <div class="py-1">{{ displayItems[selectedIndex].description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { CategorizedData } from './suggestion'

const props = defineProps<{
  items: CategorizedData[] // Allow items to be strings or objects
  command: (payload: {
    id: string
    label?: string | null
    category?: string | null
    content?: string | null
  }) => void
  query: string // Declare the query prop
}>()
const selectedIndex = ref(0)
const currentCategory = ref<string | null>(null)
const isCategoryView = computed(() => currentCategory.value != null)
const itemElements = ref<HTMLButtonElement | null[]>([])

// Compute items to display based on the current category
const displayItems = computed<CategorizedData[]>(() => {
  if (props.query) {
    if (!isCategoryView.value) {
      return props.items
    } else {
      return props.items.filter(
        (item) => item.type === 'item' && item.category === currentCategory.value
      )
    }
  } else {
    if (!isCategoryView.value) {
      return props.items.filter((item) => item.type === 'category')
    } else {
      return props.items.filter(
        (item) => item.type === 'item' && item.category === currentCategory.value
      )
    }
  }
})

watch(
  () => props.items,
  () => {
    // Reset selection state when items change
    selectedIndex.value = 0
  },
  { immediate: true } // Run watcher immediately to set initial state
)

const upHandler = () => {
  if (displayItems.value.length === 0) return
  selectedIndex.value =
    (selectedIndex.value + displayItems.value.length - 1) % displayItems.value.length
}

const downHandler = () => {
  if (displayItems.value.length === 0) return
  selectedIndex.value = (selectedIndex.value + 1) % displayItems.value.length
}

watch(
  () => selectedIndex.value,
  () => {
    if (itemElements.value[selectedIndex.value]) {
      itemElements.value[selectedIndex.value]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }
)

const selectItem = (index: number) => {
  const selectedDisplayItem = displayItems.value[index]
  if (!selectedDisplayItem) return
  if (selectedDisplayItem.type === 'category') {
    currentCategory.value = selectedDisplayItem.label
    selectedIndex.value = 0
  } else {
    console.log('----------', `${selectedDisplayItem.id}`)
    props.command({
      id: `${selectedDisplayItem.id}`,
      label: `${selectedDisplayItem.label}`,
      category: selectedDisplayItem.category,
      content: selectedDisplayItem.mcpEntry ? JSON.stringify(selectedDisplayItem.mcpEntry) : ''
    })
  }
}

const enterHandler = () => {
  selectItem(selectedIndex.value)
}

const backHandler = () => {
  if (currentCategory.value !== null) {
    currentCategory.value = null
    selectedIndex.value = 0
    return true
  } else {
    return false
  }
}

const cleanHandler = () => {
  currentCategory.value = null
  selectedIndex.value = 0
}

const onKeyDown = ({ event }: { event: KeyboardEvent }): boolean => {
  if (event.key === 'ArrowUp') {
    upHandler()
    return true
  }

  if (event.key === 'ArrowDown') {
    downHandler()
    return true
  }

  if (event.key === 'Enter') {
    enterHandler()
    // Prevent default form submission or other behavior
    event.preventDefault()
    return true
  }

  if (event.key === 'Escape') {
    cleanHandler()
    return true
  }

  if (event.key === 'Backspace') {
    if (backHandler()) {
      return true
    } else {
      return false
    }
  }

  return false
}

defineExpose({
  onKeyDown
})
</script>
