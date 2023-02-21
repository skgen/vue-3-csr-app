<template>
  <div class="pux-App">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue';
</script>

<style lang="scss">
.pux-App {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
}
</style>
