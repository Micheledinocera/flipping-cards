<template>
    <div :class="['navigation-item',navigationItemClass,{'is-selected':isSelected}]"  ></div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        index: number,
        isSelected: boolean
    }>()
    const cards=computed(()=>useCardsStore().cards)

    const navigationItemClass=computed(()=>cards.value[props.index].isCorrect?"ok":"ko")
</script>

<style scoped lang="sass">
.navigation-item
    cursor: pointer
    width: 20px
    height: 10px
    margin-right: 2px
    background-color: lightgray
    border: solid 2px transparent
    &.ok
        background-color: green
    &.ko
        background-color: red
    &.is-selected
        border-color: black
</style>