<template>
  <div class="pux-TheHomeTemplate">
    <h1 class="pux-TheHomeTemplate-title">
      <slot name="title" />
    </h1>
    <div class="pux-TheHomeTemplate-content">
      <slot name="main" />
      <slot name="demo" />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.pux-TheHomeTemplate {
    display: flex;
    flex-direction: column;
    gap: var(--app-m-4);
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    &-title {
        margin: 0;
    }

    &-content {
        display: flex;
        flex-direction: column;
        gap: var(--app-m-2);
        align-items: center;
    }
}
</style>
