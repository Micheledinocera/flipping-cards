<template>
    <div class="cards-container">
        <FlippingCard v-for="card in useCardsStore().cards" :card="card"></FlippingCard>
    </div>
</template>

<script setup lang="ts">

onBeforeMount(async ()=>{
    useUtilsStore().toggleLoad()
    useCardsStore().fetchCards('test2')
    useUtilsStore().toggleLoad()
});

</script>

<style scoped lang="sass">
</style>