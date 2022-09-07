<template>
  <div class="pux-TheHeader">
    <AppBreadcrumb :navigation="navigation" />
    <div class="pux-TheHeader-dashboard">
      <AppI18nSelect />
      <AppThemeSelect />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeIcon from '@heroicons/vue/24/outline/HomeIcon';
import WrenchScrewdriverIcon from '@heroicons/vue/24/outline/WrenchScrewdriverIcon';
import CubeTransparentIcon from '@heroicons/vue/24/outline/CubeTransparentIcon';
import AppThemeSelect from '@/components/AppThemeSelect.vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import AppI18nSelect from '@/components/AppI18nSelect.vue';

const navigation = [
  {
    label: 'Home',
    icon: HomeIcon,
    url: '/',
  },
  {
    label: 'Creality',
    icon: CubeTransparentIcon,
    url: '/project/creality-ender-3',
  },
  {
    label: 'Prusa',
    icon: WrenchScrewdriverIcon,
    url: '/project/prusa-i3-mk3s+',
  },
];

</script>

<style lang="scss">
.pux-TheHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--app-background-color-soft);

    &-dashboard {
        display: flex;
        gap: 10px;
    }
}
</style>
