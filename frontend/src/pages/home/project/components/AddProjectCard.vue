<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
</script>

<template>
  <div class="group relative w-full h-full">
    <!-- 卡片主体 -->
    <div
      class="group relative overflow-hidden rounded-xl bg-white border border-gray-200/80 backdrop-blur-sm hover:border-gray-300/80 transition-colors duration-300 h-full"
    >
      <!-- 装饰性背景层 -->
      <div class="absolute inset-0">
        <!-- 基础渐变背景 -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/80"></div>

        <!-- 线条纹理 -->
        <div
          class="absolute inset-0"
          style="
            background-size: 24px 24px;
            background-image: radial-gradient(circle, #f0f0f0 1px, transparent 1px);
            opacity: 0.5;
          "
        ></div>

        <!-- 顶部柔和光晕 -->
        <div
          class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/30 to-transparent"
        ></div>
      </div>

      <!-- 内容区域 -->
      <div class="relative flex flex-col items-center justify-center h-full p-5">
        <div class="flex flex-col items-center">
          <!-- 图标 -->
          <div class="mb-3 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-sm border border-gray-100/80 group-hover:border-gray-200/80 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <!-- 文字 -->
          <div class="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">新建项目</div>
          <div class="mt-1 text-xs text-gray-400">点击创建一个新的项目</div>
        </div>
      </div>

      <!-- 悬停时的装饰效果 -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-700"
      >
        <!-- 四角装饰 -->
        <div class="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-gray-100/50 to-transparent"></div>
        <div class="absolute right-0 bottom-0 w-16 h-16 bg-gradient-to-tl from-gray-100/50 to-transparent"></div>
      </div>
    </div>

    <!-- 卡片阴影效果 -->
    <div
      class="absolute -inset-[1px] bg-gradient-to-r from-gray-100/80 to-white/80 rounded-[13px] -z-10"
    ></div>
    <div
      class="absolute -inset-[1px] blur-md bg-gradient-to-r from-gray-100/50 to-white/50 rounded-[13px] -z-20 opacity-50"
    ></div>
  </div>
</template>
