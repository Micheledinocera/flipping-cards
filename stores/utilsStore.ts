export const useUtilsStore = defineStore('utilsStore', ()=>{
  const isLoading=ref(false);
  const showModal=ref(false);
  const modalContent=ref("");

  const toggleLoad=() =>{
    isLoading.value=!isLoading.value
  }

  const toggleShowModal=() =>{
    showModal.value=!showModal.value
  }

  return  { isLoading,showModal, modalContent, toggleLoad, toggleShowModal}
})