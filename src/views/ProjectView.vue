<template>
  <AppPageLayout center>
    <div class="pux-ProjectView">
      <h1>
        {{ t(`project.label`) }}
        <strong>{{ t(`project.items.${route.params.id}.name`) }}</strong>
      </h1>
      <p>{{ t(`project.items.${route.params.id}.description`) }}</p>
    </div>
  </AppPageLayout>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import AppPageLayout from '@/components/layout/AppPageLayout.vue';

const route = useRoute();
const { t } = useI18n();
</script>

<style lang="scss">
.pux-ProjectView {
    position: relative;
    max-width: 800px;
    padding: 40px;
    margin: 0 auto;

    strong {
        font-weight: 700;
        color: var(--app-text-color);
    }
}
</style>
