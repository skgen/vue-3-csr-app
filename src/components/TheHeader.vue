<template>
  <div class="pux-TheHeader">
    <AppBreadcrumb :navigation="navigation" />
    <div class="pux-TheHeader-dashboard">
      <AppI18nSelect />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import AppI18nSelect from '@/components/AppI18nSelect.vue';

const navigation = [
  {
    label: 'Home',
    icon: 'home',
    url: '/',
  },
  {
    label: 'Install melkor',
    icon: 'library_add',
    url: 'https://melkor.pux.fr',
  },
  {
    label: 'Creality',
    icon: 'view_in_ar',
    url: '/project/creality-ender-3',
  },
  {
    label: 'Prusa',
    icon: 'handyman',
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
