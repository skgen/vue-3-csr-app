<template>
  <RouterLink
    v-if="to && !onClick"
    v-slot="{ href, navigate, isActive, isExactActive }"
    :to="to"
    custom
  >
    <a
      :href="href"
      class="pux-AppLink"
      :data-wrapper="asWrapper ? 'true' : null"
      :data-active="isActive ? true : null"
      :data-exact-active="isExactActive ? true : null"
      @click="navigate"
    >
      <slot />
    </a>
  </RouterLink>
  <button
    v-if="onClick && !to"
    class="pux-AppLink"
    :data-wrapper="asWrapper ? 'true' : null"
    @click="onClick"
  >
    <slot />
  </button>
  <template v-if="!to && !onClick">
    <slot />
  </template>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

type Props = {
  to?: string;
  onClick?: (event: MouseEvent) => void;
  asWrapper?: boolean;
};

defineProps<Props>();

</script>

<style lang="scss">
@import "@style/mixins";

.pux-AppLink {
    padding: 2px 8px;
    transition: background-color 128ms;

    &:not([data-wrapper="true"]) {
        display: inline-block;
        text-decoration: none;
        cursor: pointer;

        &[data-active="true"] {
            color: var(--app-text-heading-color);
            cursor: default;
        }

        &:not([data-active="true"]) {
            &:hover {
                background-color: var(--hover-background-color);
            }
        }
    }
}

@include dark {
    .pux-AppLink {
        --hover-background-color: rgb(255 255 255 / 15%);
    }
}

@include light {
    .pux-AppLink {
        --hover-background-color: rgb(0 0 0 / 15%);
    }
}
</style>
