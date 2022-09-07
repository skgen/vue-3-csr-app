<template>
  <div class="pux-AppCmsLayout markdown-body">
    <h1>{{ props.title }}</h1>
    <slot name="content" />
  </div>
</template>

<script lang="ts" setup>

type Props = {
  title: string;
};

const props = defineProps<Props>();
</script>

<style lang="scss">
.pux-AppCmsLayout {
    position: relative;
    max-width: 800px;
    padding: 40px;
    margin: 0 auto;
}
</style>
