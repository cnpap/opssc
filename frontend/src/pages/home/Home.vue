<script setup lang="ts">
import { useRouter } from 'vue-router';
import { $local } from '@/store/browser/local.ts';

const router = useRouter();

const token = $local.getItem('token');
if (!token) {
  router.replace({
    name: 'login',
  });
}

const pathname = window.location.pathname;
if (pathname === '/') {
  router.replace({
    name: 'project',
  });
}
</script>

<template>
  <router-view />
</template>

<style scoped></style>
