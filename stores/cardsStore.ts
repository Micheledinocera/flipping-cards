export const useCardsStore = defineStore('cardsStore', ()=>{
  const cards=ref<Card[]>([]);

  const fetchCards=async (jsonName:string)=> {
    const { data } = await useLazyFetch<Card[]>('/'+jsonName+".json"); 
    cards.value = data.value??[];
  }
  
  return  { cards,fetchCards }
})