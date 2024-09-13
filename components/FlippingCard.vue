<template>
  <div class="card-container">
    <div class="flip-card" @click="isFlipped=!isFlipped">
        <div :class="['flip-card-inner',{'flipped-card-inner':isFlipped}]">
            <div class="flip-card-front">
                {{card.fronte}}
            </div>
            <div class="flip-card-back">
              <li v-for="retroItem in card.retro">
                {{ retroItem }}
              </li>
            </div>
        </div>
    </div>
    <div class="feedback" v-if="isFlipped || withFeedback">
      <div class="ok" @click="updateCard(true)">OK</div>
      <div class="ko" @click="updateCard(false)">KO</div>
      <div class="info" @click="showInfo"> INFO </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  card: Card,
  index: number,
}>()
const isFlipped=ref(false)

const withFeedback=computed(()=>props.card.isCorrect!==null)

const updateCard=(isCorrect:boolean)=>{
  const cardToUse={...props.card,isCorrect:isCorrect}
  useCardsStore().updateCard(props.index,cardToUse)
}

const showInfo=()=>{
  useUtilsStore().modalContent=props.card.dettaglio
  useUtilsStore().toggleShowModal()
}
</script>

<style scoped lang="sass">
.flip-card
  background-color: transparent
  width: 300px
  height: 200px
  border: 1px solid #f1f1f1
  perspective: 1000px 
/* Remove this if you don't want the 3D effect */

/* This container is needed to position the front and back side */
.flip-card-inner
  position: relative
  width: 100%
  height: 100%
  text-align: center
  transition: transform 0.8s
  transform-style: preserve-3d

/* Do an horizontal flip when you move the mouse over the flip box container */
.flipped-card-inner
  transform: rotateY(180deg)

/* Position the front and back side */
.flip-card-front, .flip-card-back 
  position: absolute
  width: 100%
  height: 100%
  -webkit-backface-visibility: hidden /* Safari */
  backface-visibility: hidden

/* Style the front side (fallback if image is missing) */
.flip-card-front
  background-color: #bbb
  color: black

/* Style the back side */
.flip-card-back
  background-color: dodgerblue
  color: white
  transform: rotateY(180deg)

.feedback
  display: grid
  grid: auto-flow / repeat(3, 80px)
  width: fit-content
  justify-content: space-around
  margin: 10px auto
  >div
    cursor: pointer
</style>