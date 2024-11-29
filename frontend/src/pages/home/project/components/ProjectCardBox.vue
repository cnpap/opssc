<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import AddProjectCard from './AddProjectCard.vue';
import { projectGroups } from './data';
</script>

<template>
  <div class="flex-1 bg-slate-50 h-full overflow-auto p-4">
    <div
      class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4"
    >
      <AddProjectCard />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
