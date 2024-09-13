export const useCardsStore = defineStore('cardsStore', ()=>{
  const cards=ref<Card[]>([]);

  const fetchCards=async (jsonName:string)=> {
    const { data } = await useLazyFetch<Card[]>('/'+jsonName+".json"); 
    cards.value = data.value?data.value.map(card=>({...card,isCorrect:null})):[];
  }

  const updateCard=(index:number,card:Card)=>{
    const cardsToOverride=[...cards.value]
    cardsToOverride[index]=card
    cards.value=cardsToOverride
  }
  
  const shuffleCards=(limit:number)=>{
    const arrayToShuffle=[...cards.value]
    arrayToShuffle.sort(() => Math.random() - 0.5);
    cards.value=arrayToShuffle.filter((card,index)=>index<limit)
  }

  return  { cards,fetchCards,updateCard,shuffleCards }
})