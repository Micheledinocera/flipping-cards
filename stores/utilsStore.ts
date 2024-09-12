export const useUtilsStore = defineStore('utilsStore', ()=>{
  const isLoading=ref(false);

  const toggleLoad=() =>{
    isLoading.value=!isLoading.value
  }

  return  { isLoading, toggleLoad }
})