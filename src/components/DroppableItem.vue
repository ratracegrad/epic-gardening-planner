<script setup lang="ts">
const props = defineProps({
  onDragOver: Function,
  onDragLeave: Function,
  onDrop: Function,
})

function handleOnDragOver(event: DragEvent) {
  event.preventDefault()
  props.onDragOver && props.onDragOver(event)
}
</script>

<template>
  <span
    @dragover="handleOnDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
  >
    <slot />
  </span>
</template>

<style lang="scss" scoped>

</style>
