<template>
  <router-link
    v-if="props.to && isRelative"
    v-slot="{ href, navigate, isActive, isExactActive }"
    :to="props.to"
    custom
  >
    <a
      :href="href"
      class="pux-AppLink"
      :data-active="isActive ? true : null"
      :data-exact-active="isExactActive ? true : null"
      :data-wrapper="props.asWrapper || undefined"
      v-bind="$attrs"
      @click="navigate"
    >
      <slot />
    </a>
  </router-link>
  <a
    v-else-if="props.to && !isRelative"
    :href="props.to"
    class="pux-AppLink"
    :data-wrapper="props.asWrapper || undefined"
    v-bind="$attrs"
  >
    <slot />
  </a>

  <button
    v-else-if="props.asButton"
    class="pux-AppLink"
    :data-wrapper="props.asWrapper || undefined"
    v-bind="$attrs"
  >
    <slot />
  </button>

  <div
    v-else
    class="pux-AppLink"
    :data-wrapper="props.asWrapper || undefined"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type Props = {
  to?: string;
  asButton?: boolean;
  asWrapper?: boolean;
};

const props = defineProps<Props>();

const isRelative = computed(() => (props.to ? !/^(http:\/\/|https:\/\/|file:\/\/|tel:|mailto:)/i.test(props.to) : false));

</script>

<style lang="scss">
.pux-AppLink {
    padding: 2px 8px;
    transition: background-color 128ms;

    &:not([data-wrapper="true"]) {
        display: inline-flex;
        align-items: center;
        color: var(--app-text-color);
        text-decoration: none;
        cursor: pointer;

        &[data-active="true"] {
            color: var(--app-text-heading-color);
            cursor: default;
        }

        &:not([data-active="true"]) {
            &:hover {
                background-color: rgb(255 255 255 / 0.15);
            }
        }
    }
}
</style>
