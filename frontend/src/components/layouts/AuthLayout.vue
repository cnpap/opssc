<template>
  <div class="w-screen h-screen absolute inset-0 z-0 bg-[#131113]">
    <div class="dark:bg-gray-900 min-h-screen flex">
      <div class="flex-1 flex items-center justify-center">
        <div class="w-full max-w-md">
          <div class="flex items-center justify-center px-4 lg:py-0 sm:px-0 w-full min-h-screen">
            <div class="w-full max-w-[400px] text-slate-100 space-y-4 md:space-y-6">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
