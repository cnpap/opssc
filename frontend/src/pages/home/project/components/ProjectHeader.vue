<template>
  <div class="h-16 px-4 border-b border-gray-100 flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <span class="text-xl font-bold text-gray-900">OPSS Cloud</span>
    </div>

    <!-- 头像菜单 -->
    <DropdownMenu>
      <DropdownMenuTrigger class="focus:outline-none">
        <div class="relative">
          <div
            class="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff3f1a] to-[#ff713f] flex items-center justify-center text-white font-medium cursor-pointer"
          >
            A
          </div>
          <div
            class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
          ></div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="w-56">
        <DropdownMenuItem>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            <span>个人信息</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            <span>设置</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div class="flex items-center text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"
              />
            </svg>
            <span>退出登录</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
</script>
