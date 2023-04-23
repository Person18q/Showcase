function basketPrice() {
  const order = document.querySelectorAll('.order')
  const totalPriceEl = document.querySelector('.total-price')
  const free = document.querySelector('.free')
  
  let priceTotal = 0

  order.forEach( item => {
    const amountEl = item.querySelector('[data-quantity]')
    const priceEl = item.querySelector('.basket__price')
    priceTotal += parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
  })

  totalPriceEl.innerText = priceTotal + ' '

  if(priceTotal >= 600){
    free.innerText = 'Бесплатно'
    free.classList.add('green')
  }else{
    free.innerText = '300 ₽'
    free.classList.remove('green')
  }
}   