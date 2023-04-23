 function toggleBasket () {
  const basketWrapper = document.querySelector('.basket')
  const basketEmpty = document.querySelector('[data-basket-empty]')
  const form = document.querySelector('#order-form')

  if(basketWrapper.children.length > 0){
    basketEmpty.classList.add('hidden')
    form.classList.remove('hidden')
  }else{
    basketEmpty.classList.remove('hidden')
    form.classList.add('hidden')
  }

}