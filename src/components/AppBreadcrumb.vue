<template>
  <nav class="pux-AppBreadcrumb">
    <AppLink
      v-for="link in props.navigation"
      :key="link.url"
      :to="link.url"
    >
      <component :is="link.icon" />
      {{ link.label }}
    </AppLink>
  </nav>
</template>

<script lang="ts" setup>
import type { FunctionalComponent } from 'vue';
import AppLink from '@/components/AppLink.vue';

type Props = {
  navigation: {
    label: string;
    url: string;
    icon: FunctionalComponent;
  }[];
};

const props = defineProps<Props>();

</script>

<style lang="scss">
.pux-AppBreadcrumb {
    display: flex;

    .pux-AppLink {
        display: flex;
        gap: 5px;
        align-items: center;

        svg {
            width: 20px;
        }
    }

    > * + * {
        margin: 0 0 0 10px;
    }
}
</style>
