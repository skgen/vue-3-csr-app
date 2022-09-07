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
    <ChevronIcon />
  </div>
</template>

<script lang="ts" setup>
import ChevronIcon from '@heroicons/vue/24/outline/ChevronDownIcon';
import { useI18n } from 'vue-i18n';
import useTheme from '@/composables/useTheme';
import { Theme } from '@/lib/modules/theme';

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
    overflow: hidden;
    background-color: var(--app-background-color-soft);
    border: 1px solid var(--app-border-color);
    border-radius: 5px;

    select {
        padding: 5px 10px;
        color: var(--app-text-color);
        background-color: inherit;
        border: none;
        outline: none;
    }

    > svg {
        position: absolute;
        top: 52%;
        right: 5px;
        width: 16px;
        pointer-events: none;
        transform: translate(0, -50%);
    }

    &::before {
        @include pseudo;

        top: 0;
        right: 0;
        width: 15px;
        height: 100%;
        pointer-events: none;
        background-color: inherit;
    }
}
</style>
