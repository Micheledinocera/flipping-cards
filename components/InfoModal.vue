<template>
    <div class="modal-overlay" @click="useUtilsStore().toggleShowModal">
        <div class="modal-content" @click.stop="">
            {{useUtilsStore().modalContent}}
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>
.modal-overlay
    position: absolute
    left: 0
    top: 0
    background-color: rgba(0,0,0,0.5)
    cursor: pointer
    width: 100%
    height: 100%
    z-index: 1
    .modal-content
        background-color: white
        cursor: auto
        width: 50%
        margin: 40px auto
        height: 75%
        border-radius: 8px
        text-align: center
        padding: 20px
</style>