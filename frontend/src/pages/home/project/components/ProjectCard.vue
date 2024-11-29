<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu/index';
import { ProjectGroup } from './data';

const props = defineProps<{
  group: ProjectGroup;
}>();

// 模拟消息数据
const messageTypes = [
  { type: 'comment', count: 2 },
  { type: 'update', count: 1 },
];

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    month: 'long',
    day: 'numeric',
  });
};
</script>

<template>
  <div class="group relative w-full">
    <!-- 卡片主体 -->
    <div
      class="relative overflow-hidden rounded-xl bg-white border border-gray-200/80 backdrop-blur-sm"
    >
      <!-- 装饰性背景层 -->
      <div class="absolute inset-0">
        <!-- 基础渐变背景 -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/80"></div>

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

      <!-- 主要内容区域 -->
      <div class="relative p-5">
        <!-- 顶部信息 -->
        <div class="flex items-center justify-between mb-4">
          <!-- 消息提醒 -->
          <div class="flex items-center space-x-1.5">
            <div
              v-if="messageTypes[0].count > 0"
              class="group/msg relative flex items-center px-2 h-6 text-xs font-medium text-red-600 bg-red-50/60 rounded-sm border border-red-100/50 hover:bg-red-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 w-3.5 h-3.5 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              {{ messageTypes[0].count }}
              <div
                class="absolute left-0 -bottom-1 w-full h-[1px] bg-red-200/20 scale-x-0 group-hover/msg:scale-x-100 transition-transform origin-left duration-300"
              ></div>
            </div>
          </div>

          <!-- 更新时间 -->
          <div class="text-xs text-gray-400">
            {{ formatDate(props.group.updatedAt) }}
          </div>
        </div>

        <!-- 项目信息 -->
        <div class="space-y-2 mb-6">
          <h3 class="text-lg font-medium tracking-tight text-gray-900">
            {{ props.group.name }}
          </h3>
          <p class="text-sm text-gray-500 line-clamp-2">
            {{ props.group.description }}
          </p>
        </div>

        <!-- 操作按钮 -->
        <div class="flex items-center gap-3">
          <Button
            class="flex-1 h-9 bg-gradient-to-r from-[#ff3f1a] to-[#ff5f2d] text-white hover:opacity-90 transition-opacity"
          >
            <div class="flex items-center gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>

              <div>进入项目</div>
            </div>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                class="h-9 px-2.5 hover:bg-gray-100/80 text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-[140px] text-2xl">
              <DropdownMenuItem class="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 w-4 h-4 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>

                编辑项目
              </DropdownMenuItem>
              <DropdownMenuItem
                class="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 w-4 h-4 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>

                删除项目
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <!-- 悬停时的装饰效果 -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-700"
      >
        <!-- 悬停渐变效果 -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#ff3f1a05] to-transparent"></div>
        <!-- 悬停时的扫光效果 -->
        <div
          class="absolute -inset-[200%] animate-[spin_4s_linear_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-y-full"
        ></div>
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

<style scoped>
.group:hover .scale-hover {
  transform: scale(1.05);
}
</style>
