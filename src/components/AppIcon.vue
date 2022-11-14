<template>
  <span
    class="pux-AppIcon"
    :data-fill="props.fill || undefined"
  >
    {{ props.icon }}
  </span>
</template>

<script lang="ts" setup>

type Props = {
  icon: string;
  fill?: boolean;
};

const props = defineProps<Props>();
</script>

<style lang="scss">
.pux-AppIcon {
    display: inline-block;
    font-family: "Material Symbols Outlined", sans-serif;
    font-size: inherit;
    font-style: normal;
    font-weight: normal;
    font-feature-settings: "liga";
    line-height: 1;
    color: currentcolor;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;

    &[data-fill="true"] {
        font-variation-settings: "FILL" 1;
    }
}
</style>
