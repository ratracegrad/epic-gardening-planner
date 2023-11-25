<script setup lang="ts">
const props = defineProps({
  transferData: Object,
})

function handleDragStart(event: DragEvent) {
  event.dataTransfer?.setData('value', JSON.stringify(props.transferData))
}
</script>

<template>
  <span
    draggable="true"
    @dragstart="handleDragStart"
  >
    <slot />
  </span>
</template>

<style lang="scss" scoped>

</style>
