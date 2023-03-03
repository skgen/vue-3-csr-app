<template>
  <TheNotFoundTemplate>
    <span>
      {{ $t('views.notFound.title') }}
    </span>
    <mk-link to="/">
      <mk-icon icon="arrow_back" />
      {{ $t('views.notFound.back') }}
      <mk-icon icon="house" />
    </mk-link>
  </TheNotFoundTemplate>
</template>

<script lang="ts" setup>
import TheNotFoundTemplate from '@/components/templates/TheNotFoundTemplate.vue';
</script>
