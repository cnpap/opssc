<template>
  <div class="h-16 px-4 border-b border-gray-100 bg-white flex items-center justify-between">
    <!-- Tabs Navigation -->
    <div class="flex items-center h-full">
      <nav class="flex items-center space-x-2">
        <router-link
          v-for="tab in tabs"
          :key="tab.value"
          :to="tab.path"
          custom
          v-slot="{ isActive, navigate }"
        >
          <button @click="navigate" class="relative group">
            <div
              class="px-4 py-2 rounded-md inline-flex items-center gap-2 transition-colors duration-200"
              :class="[
                isActive
                  ? 'bg-[#ff3f1a]/10 text-[#ff3f1a]'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50',
              ]"
            >
              <component :is="tab.icon" class="w-4 h-4" />
              <span class="font-medium">{{ tab.label }}</span>
            </div>
          </button>
        </router-link>
      </nav>
    </div>

    <!-- Right Side -->
    <div class="flex items-center space-x-4">
      <!-- Notifications -->
      <button
        @click="toggleNotifications"
        class="p-2 rounded-md hover:bg-gray-50 text-gray-600 relative"
        title="通知"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span
          v-if="unreadNotifications"
          class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"
        ></span>
      </button>

      <!-- Avatar Menu -->
      <DropdownMenu>
        <DropdownMenuTrigger class="focus:outline-none">
          <div class="flex items-center space-x-3">
            <div class="relative">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff3f1a] to-[#ff713f] p-[2px]"
              >
                <div class="w-full h-full rounded-full bg-white p-0.5">
                  <div
                    class="w-full h-full rounded-full bg-gradient-to-r from-[#ff3f1a] to-[#ff713f] flex items-center justify-center text-white font-medium"
                  >
                    {{ userInitial }}
                  </div>
                </div>
              </div>
              <div
                class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
              ></div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-56">
          <div class="px-2 py-1.5 text-sm text-gray-500 border-b border-gray-100">账号信息</div>
          <DropdownMenuItem class="focus:bg-gray-50" @click="navigateToProfile">
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
          <DropdownMenuItem class="focus:bg-gray-50" @click="navigateToSettings">
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
          <div class="px-2 py-1.5 text-sm text-gray-500 border-t border-b border-gray-100">
            系统
          </div>
          <DropdownMenuItem class="focus:bg-gray-50" @click="navigateToHelp">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>帮助文档</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem class="focus:bg-gray-50" @click="handleLogout">
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { $local } from '@/store/browser/local';

const router = useRouter();

// Tab icons
const ProjectIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  `,
};

const HostIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  `,
};

// Navigation tabs
const tabs = [
  { label: '项目管理', value: 'project', path: '/project', icon: ProjectIcon },
  { label: '主机管理', value: 'host', path: '/host', icon: HostIcon },
];

// User data
const userName = ref('Admin');
const userRole = ref('管理员');
const userInitial = computed(() => userName.value.charAt(0));

// Search functionality
const searchQuery = ref('');
const handleSearch = () => {
  // 实现搜索逻辑
  console.log('Searching for:', searchQuery.value);
};

// Notifications
const unreadNotifications = ref(true);
const toggleNotifications = () => {
  // 实现通知面板切换逻辑
  console.log('Toggle notifications');
};

// Quick actions
const handleAddNew = () => {
  // 实现新建功能
  console.log('Add new item');
};

const toggleMenu = () => {
  // 实现菜单切换逻辑
  console.log('Toggle menu');
};

// Navigation functions
const navigateToProfile = () => {
  router.push('/profile');
};

const navigateToSettings = () => {
  router.push('/settings');
};

const navigateToHelp = () => {
  router.push('/help');
};

const handleLogout = () => {
  // 实现登出逻辑
  $local.removeItem('token');
  router.replace({
    name: 'login',
  });
};
</script>
