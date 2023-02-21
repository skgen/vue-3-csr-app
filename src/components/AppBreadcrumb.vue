<template>
  <nav class="pux-AppBreadcrumb">
    <AppLink
      v-for="link in props.navigation"
      :key="link.url"
      :to="link.url"
    >
      <AppIcon :icon="link.icon" />
      {{ link.label }}
    </AppLink>
  </nav>
</template>

<script lang="ts" setup>
import AppLink from '@/components/AppLink.vue';
import AppIcon from '@/components/AppIcon.vue';

type Props = {
  navigation: {
    label: string;
    url: string;
    icon: string;
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
