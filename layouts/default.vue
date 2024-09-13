<template>
    <div>
      <InfoModal v-if="useUtilsStore().showModal"/>
      <Loader v-if="useUtilsStore().isLoading"/>
      <!-- <Header /> -->
      <slot />
      <!-- <Footer /> -->
    </div>
</template>

<script setup lang="ts">
</script>