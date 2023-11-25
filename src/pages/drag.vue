<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const meals = ref([
  'Hamburger',
  'Pizza',
  'Spaghetti',
  'Tacos',
  'Teriyaki Chicken',
])

const yuckyMeals = ref([
  'Bat wing soup',
  'Spicy Octopus',
  'Anything from Taco Bell',
])
</script>

<template>
  <h1 class="mt-10 text-5xl font-bold">
    Favorite Foods
  </h1>

  <!-- Notice the group prop is the same on both <draggable> -->
  <draggable v-model="meals" tag="ul" group="meals">
    <template #item="{ element: meal }">
      <li>{{ meal }}</li>
    </template>
  </draggable>

  <h1 class="mt-10 text-5xl font-bold">
    Terrible Foods
  </h1>
  <draggable v-model="yuckyMeals" tag="ul" group="meals">
    <template #item="{ element: meal }">
      <li>{{ meal }}</li>
    </template>
  </draggable>
</template>
