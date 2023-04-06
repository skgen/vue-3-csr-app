<template>
  <TheHomeTemplate>
    <template #title>
      {{ $t('component.TheHomeView.welcome', { appName }) }}
    </template>
    <template #main>
      <mk-link
        to="https://melkor.pux.fr"
        as-wrapper
      >
        <mk-button outlined>
          {{ $t('component.TheHomeView.getStarted') }}
        </mk-button>
      </mk-link>
    </template>
    <template #demo>
      <div class="pux-TheHomeView-demo">
        <mk-theme-toggle />
        <mk-locale-selector />
      </div>
    </template>
  </TheHomeTemplate>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import TheHomeTemplate from '@/components/templates/TheHomeTemplate.vue';

const appName = computed(() => import.meta.env.VITE_APP_NAME);
</script>

<style lang="scss">
.pux-TheHomeView {
    &-demo {
        display: flex;
        gap: var(--app-m-1);
        align-items: center;
    }
}
</style>
