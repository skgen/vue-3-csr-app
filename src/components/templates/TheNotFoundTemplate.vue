<template>
  <div class="pux-TheNotFoundTemplate">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.pux-TheNotFoundTemplate {
    display: flex;
    flex-direction: column;
    gap: var(--app-m-3);
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
</style>
