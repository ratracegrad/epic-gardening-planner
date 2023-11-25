<script setup lang="ts">
import draggable from 'vuedraggable'
import { supabase } from '~/lib/supabaseClient'

import 'vue3-carousel/dist/carousel.css'

defineOptions({
  name: 'IndexPage',
})

const length = ref(4)
const width = ref(4)
const plants = ref([])
const bed = ref(Array.from(Array(length.value * width.value)))

watch(length, (newLength) => {
  bed.value = Array.from(Array(newLength * width.value))
  updateBed()
})
watch(width, (newWidth) => {
  bed.value = Array.from(Array(newWidth * length.value))
  updateBed()
})

const gridStyle = computed(() => {
  return {
    gridTemplateColumns: `repeat(${length.value}, minmax(100px, 1fr))`,
  }
})

onMounted(() => {
  getPlants()
  updateBed()
})

function getImageUrl(name: string) {
  return new URL(`../assets/plants/${name}`, import.meta.url).href
}

async function getPlants() {
  const { data } = await supabase.from('plants').select()
  plants.value = data
}

function updateBed() {
  bed.value = bed.value.map((item, index) => {
    return {
      id: index + 1,
      name: index + 1,
      imgUrl: 'blank.png',
    }
  })
}
</script>

<template>
  <div>
    <h1 class="text-5xl uppercase text-orange-700">
      garden planner
    </h1>
    <div>
      <p class="mb-3 mt-10 text-green-500">
        1. Select your bed size:
      </p>
      <div class="flex items-center justify-center">
        <span class="ml-6 mr-3">Length: </span>
        <select id="length" v-model="length" name="length" class="border-2 border-gray-600 rounded-md px-2">
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
          <option value="5">
            5
          </option>
          <option value="6">
            6
          </option>
          <option value="7">
            7
          </option>
          <option value="8">
            8
          </option>
        </select>
        <span class="ml-6 mr-3">Width: </span>
        <select
          id="width" v-model="width" name="width" class="border-2 border-gray-600 rounded-md px-2"
        >
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
          <option value="5">
            5
          </option>
          <option value="6">
            6
          </option>
          <option value="7">
            7
          </option>
          <option value="8">
            8
          </option>
        </select>
      </div>
    </div>
    <div>
      <p class="mb-3 mt-10 text-green-500">
        2. Drag and drop your plants:
      </p>
      <div class="mx-auto max-w-2xl">
        <div class="grid grid-flow-col gap-4 overflow-x-auto">
          <!-- <div v-for="(plant, index) in plants" :key="index" class="flex flex-col">
            <img :src="getImageUrl(plant?.imgUrl)" class="mx-auto h-16 w-16">
            <p class="mb-4 mt-2 text-xs">
              {{ plant?.name }}
            </p>
          </div> -->
          <draggable v-model="plants" group="bedPlants">
            <template #item="{ element: plant }">
              <div class="grid grid-flow-col gap-4 overflow-x-auto">
                <div class="flex flex-col">
                  <img :src="getImageUrl(plant?.imgUrl)" class="mx-auto h-16 w-16">
                  <p class="mb-4 mt-2 text-xs">
                    {{ plant?.name }}
                  </p>
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>

  <!-- GARDEN GRID -->
  <div class="mx-auto max-w-5xl">
    <div class="grid-columns grid mt-10 gap-1" :style="gridStyle">
      <!-- <div v-for="(i) in bed" :key="i" class="border-1 border-gray-300 bg-blue-100 p-4">
        {{ i }}
      </div> -->
      <draggable v-model="bed" tag="div" group="meals">
        <template #item="{ element: plant }">
          <div class="border-1 border-gray-300 bg-blue-100 p-4">
            {{ plant }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
  <!-- END GARDEN GRID -->
</template>

<style scoped>
</style>
