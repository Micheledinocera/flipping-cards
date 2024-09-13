<template>
  <NuxtLayout class="layout-container">
    <NuxtScrollbar id="layout-content">
      <NuxtPage/>
    </NuxtScrollbar>
  </NuxtLayout>
</template>

<style scoped lang="sass">
.layout-container
  
    display: block
    height: 100vh
    background-color: $primary-color-light
</style>