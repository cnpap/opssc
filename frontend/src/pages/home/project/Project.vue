<script setup lang="ts">
import ProjectCardBox from '@/pages/home/project/components/ProjectCardBox.vue';
import { computed, ref, onMounted } from 'vue';
import { projectGroups } from '@/pages/home/project/components/data';
import ProjectCard from '@/pages/home/project/components/ProjectCard.vue';
import DotBackground from '@/pages/home/project/components/DotBackground.vue';
import Header from '@/components/layout/Header.vue';

const searchValue = ref('');
const filteredData = computed(() => {
  return projectGroups.filter((item) => {
    return !searchValue.value || item.name.toLowerCase().includes(searchValue.value.toLowerCase());
  });
});

// 产品介绍文本动画状态
const isTextVisible = ref(false);
const isSubTextVisible = ref(false);

// 在组件挂载后开始动画
onMounted(() => {
  setTimeout(() => {
    isTextVisible.value = true;
    setTimeout(() => {
      isSubTextVisible.value = true;
    }, 500);
  }, 200);
});
</script>

<template>
  <div class="flex h-screen">
    <!-- 左侧 -->
    <div class="w-1/2 hidden md:block relative">
      <DotBackground />
      <!-- 产品介绍文本层 -->
      <div class="absolute inset-0 flex flex-col justify-center px-16 z-10 pointer-events-none">
        <div class="space-y-8">
          <!-- 主标题 -->
          <h1
            class="text-5xl font-bold text-white tracking-tight transition-all duration-1000 transform"
            :class="isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            <span class="text-[#ff3f1a]">OPSS</span>
            <span class="relative">
              Cloud
              <span
                class="absolute -top-1 -right-3 w-2 h-2 bg-[#ff3f1a] rounded-full animate-ping"
              ></span>
            </span>
          </h1>

          <!-- 副标题和描述 -->
          <div
            class="space-y-4 transition-all duration-1000 delay-300"
            :class="isSubTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            <p class="text-xl text-gray-400 font-medium">新一代云原生应用管理平台</p>
            <div class="flex items-center space-x-4 text-sm text-gray-500">
              <div class="flex items-center space-x-1">
                <div class="w-1 h-1 bg-[#ff3f1a] rounded-full"></div>
                <span>高效部署</span>
              </div>
              <div class="flex items-center space-x-1">
                <div class="w-1 h-1 bg-[#ff3f1a] rounded-full"></div>
                <span>安全可靠</span>
              </div>
              <div class="flex items-center space-x-1">
                <div class="w-1 h-1 bg-[#ff3f1a] rounded-full"></div>
                <span>简单易用</span>
              </div>
            </div>
          </div>

          <!-- 装饰性元素 -->
          <div
            class="absolute bottom-12 left-16 transition-all duration-1000 delay-500"
            :class="isSubTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            <div class="flex items-center space-x-3">
              <div class="w-12 h-[1px] bg-gradient-to-r from-[#ff3f1a] to-transparent"></div>
              <span class="text-xs text-gray-500 uppercase tracking-widest">Cloud Native</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="relative flex-1 flex flex-col h-full">
      <!-- Header -->
      <div class="sticky top-0 z-10 bg-white">
        <Header />
      </div>

      <!-- 项目列表 -->
      <div class="h-[calc(100vh-4rem)] overflow-auto">
        <ProjectCardBox>
          <template v-for="group in filteredData" :key="group.id">
            <ProjectCard :group="group" />
          </template>
        </ProjectCardBox>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
