<script setup lang="ts">
import Spin from '@/components/Spin.vue';
import { toast } from '@/components/ui/toast';
import { onMounted } from 'vue';
import { $fetch } from '@/api/api.ts';
import { $local } from '@/store/browser/local.ts';
import { useRouter } from 'vue-router';

const code = new URLSearchParams(window.location.search).get('code') as string;
const router = useRouter();

onMounted(() => {
  const { dismiss } = toast({
    title: '正在跳转',
    description: '正在初始化...',
  });

  $fetch
    .POST('/auth/access-token', {
      body: {
        code,
      },
    })
    .then((res) => {
      if (res.data) {
        if (res.data.success) {
          $local.setItem('token', res.data.data.access_token);
          router.replace({
            name: 'home',
          });
          dismiss();
        }
      }
    });
});
</script>

<template>
  <Spin :fullscreen="true" />
</template>

<style scoped></style>
