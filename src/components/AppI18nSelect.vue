<template>
  <div class="pux-AppI18nSelect">
    <select
      v-model="locale"
      name="app-i18n-select"
    >
      <option
        v-for="option in availableLocales"
        :key="option"
        :value="option"
        :selected="option === locale"
      >
        {{ t(`app.i18n.${option}`) }}
      </option>
    </select>
    <AppIcon icon="expand_more" />
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { persistLocale } from '@/lib/modules/i18n';
import AppIcon from '@/components/AppIcon.vue';

const { t, locale, availableLocales } = useI18n();

watch(locale, persistLocale);

</script>

<style lang="scss">
.pux-AppI18nSelect {
    position: relative;
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 5px 5px 5px 10px;
    overflow: hidden;
    background-color: var(--app-background-color-soft);
    border: 1px solid var(--app-border-color);
    border-radius: 5px;

    select {
        color: var(--app-text-color);
        background-color: inherit;
        border: none;
        outline: none;
        appearance: none;
    }
}
</style>
