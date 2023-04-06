<template>
  <TheNotFoundTemplate>
    <span>
      {{ $t('component.TheNotFoundView.title') }}
    </span>
    <mk-link to="/">
      <mk-icon icon="arrow_back" />
      {{ $t('component.TheNotFoundView.back') }}
      <mk-icon icon="house" />
    </mk-link>
  </TheNotFoundTemplate>
</template>

<script lang="ts" setup>
import TheNotFoundTemplate from '@/components/templates/TheNotFoundTemplate.vue';
</script>
