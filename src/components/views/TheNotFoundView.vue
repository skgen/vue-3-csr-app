<template>
  <TheNotFoundTemplate>
    <span>
      404 - Not found
    </span>
    <mk-link to="/">
      <mk-icon icon="arrow_back" />
      Back home
      <mk-icon icon="house" />
    </mk-link>
  </TheNotFoundTemplate>
</template>

<script lang="ts" setup>
import TheNotFoundTemplate from '@/components/templates/TheNotFoundTemplate.vue';
</script>
