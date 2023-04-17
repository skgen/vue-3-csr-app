<template>
  <div class="pux-TheHomeView">
    <h1 class="pux-TheHomeView-title">
      {{ $t('component.TheHomeView.welcome', { appName }) }}
    </h1>
    <div class="pux-TheHomeView-content">
      <mk-link
        to="https://melkor.pux.fr"
        as-wrapper
      >
        <mk-button outlined>
          {{ $t('component.TheHomeView.getStarted') }}
        </mk-button>
      </mk-link>
      <div class="pux-TheHomeView-demo">
        <mk-theme-toggle />
        <mk-locale-selector />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const appName = computed(() => import.meta.env.VITE_APP_NAME);
</script>

<style lang="scss">
.pux-TheHomeView {
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

    &-demo {
        display: flex;
        gap: var(--app-m-1);
        align-items: center;
    }
}
</style>
