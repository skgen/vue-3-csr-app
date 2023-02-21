<template>
  <AppPageLayout center>
    <div class="pux-HomeView">
      <h1>
        {{ t('app.welcome', { appName }) }}
      </h1>

      <h2>
        <AppLink to="https://melkor.pux.fr">
          <AppIcon icon="library_add" />
          Install melkor
        </AppLink>
      </h2>
    </div>
  </AppPageLayout>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import AppPageLayout from '@/components/layout/AppPageLayout.vue';
import AppLink from '@/components/AppLink.vue';
import AppIcon from '@/components/AppIcon.vue';

const { t } = useI18n();

const appName = computed(() => import.meta.env.VITE_APP_NAME);
</script>

<style lang="scss">
.pux-HomeView {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;

    .pux-AppLink {
        display: inline-flex;
        gap: 5px;
        align-items: center;
    }
}
</style>
