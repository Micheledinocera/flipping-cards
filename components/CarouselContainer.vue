<template>
    <div class="reset">
        <div class="refresh" @click="resetApp"> Restart </div>
        <input type="number" v-model="poolNumber">
    </div>
    <div class="counter">
        {{ currentMaxSlide }} / {{ maxSlide+1 }}
    </div>
    <div class="cards-container">
        <Carousel ref="myCarousel" :touchDrag="false" :mouseDrag="false">
            <Slide v-for="(card,index) in cards" :key="'card_'+index">
                <FlippingCard :card="card" :index="index"></FlippingCard>
            </Slide>
        </Carousel>
    </div>
    <div class="navigator">
        <NavigatorItem v-for="(slideIndex,index) in currentMaxSlide" @click="navigationHandler(index)" :index="index" :isSelected="index===currentSlide"></NavigatorItem>
    </div>
    <div class="controls" v-if="currentSlide<currentMaxSlide && currentMaxSlide<maxSlide">
        <div class="next" @click="nextHandler"> Next </div>
    </div>
</template>

<script setup lang="ts">
    const myCarousel = ref<any>(null)
    const poolNumber = ref<number>(10)
    const cards=computed(()=>useCardsStore().cards)
    const feedbackCards=computed(()=>cards.value.filter(card=>card.isCorrect!==null))
    const maxSlide=computed(()=>myCarousel.value?myCarousel.value.data.maxSlide.value:0)
    const currentMaxSlide=computed(()=>feedbackCards.value.length)
    const currentSlide=computed(()=>myCarousel.value?myCarousel.value.data.currentSlide.value:0)

    const navigationHandler=(index:number)=>{
        myCarousel.value.slideTo(index)
    }

    const nextHandler=()=>{
        console.log(myCarousel.value)
        myCarousel.value.slideTo(currentMaxSlide.value)
        myCarousel.value.next()
    }

    const resetApp=async ()=>{
        useUtilsStore().toggleLoad()
        useCardsStore().cards=[]
        await useCardsStore().fetchCards(JSON_NAME)
        useCardsStore().shuffleCards(poolNumber.value)
        useUtilsStore().toggleLoad()
        myCarousel.value.restartCarousel();
        myCarousel.value.slideTo(0);
    }

    onBeforeMount(async ()=>{
        resetApp();
    });

</script>

<style scoped lang="sass">
.navigator
    display: flex
    margin: auto
    width: fit-content
.controls
    display: flex
    .next
        margin: 10px auto
        cursor: pointer
.counter
    margin-top: 20px
    text-align: center
.reset
    display: flex
    width: fit-content
    margin: 20px auto
    .refresh
        cursor: pointer
        margin-right: 20px 
</style>