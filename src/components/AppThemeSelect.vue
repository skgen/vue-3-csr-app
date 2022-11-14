<template>
  <div class="pux-AppThemeSelect">
    <select
      name="app-theme-select"
      @change="handleChange"
    >
      <option
        v-for="option in themes"
        :key="option"
        :value="option"
        :selected="option === theme"
      >
        {{ t(`app.theme.${Theme[option]}`) }}
      </option>
    </select>
    <AppIcon icon="expand_more" />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import useTheme from '@/composables/useTheme';
import { Theme } from '@/lib/modules/theme';
import AppIcon from '@/components/AppIcon.vue';

const { themes, theme, update } = useTheme();

const { t } = useI18n();

function handleChange(evt: Event) {
  const target = evt.target as HTMLSelectElement;
  const newTheme: Theme = parseInt(target.value, 10);
  update(newTheme);
}

</script>

<style lang="scss">
@import "@style/mixins";

.pux-AppThemeSelect {
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
