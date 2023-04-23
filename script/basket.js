const basket = document.querySelector('.basket')
const cart = document.querySelector('.basket')

window.addEventListener('click', e => {
  if(e.target.hasAttribute('data-basket')){

    const product = e.target.closest('.product')

    const productInfo = {
      id: product.dataset.id,
      img: product.querySelector('.product__img').getAttribute('src'),
      title: product.querySelector('.product__text').innerText,
      itemsInBox: product.querySelector('[data-items-in-box]').innerText,
      weight: product.querySelector('.price__weight').innerText,
      price: product.querySelector('.price').innerText,
      quantity: product.querySelector('[data-quantity]').innerText
    }
    
    const itemInBasket = basket.querySelector(`[data-id="${productInfo.id}"]`)

    if(itemInBasket){
      const counter = itemInBasket.querySelector('[data-quantity]')
      if(parseInt(counter.innerText) + parseInt(productInfo.quantity) <= 10){
        counter.innerText = parseInt(counter.innerText) + parseInt(productInfo.quantity)
      }
    }else{
      const map = 
      `<div class="order" data-id="${productInfo.id}">
        <img class="basket__img" src="${productInfo.img}" alt="Роллы">
        <div class="info__box">
            <p class="basket__product__text">${productInfo.title}</p>
            <p data-items-in-box>${productInfo.weight} / ${productInfo.itemsInBox}</p>
            <div class="basket__product__price">
              <div class="product__button">
                <button class="button" data-action="delete">-</button>
                <span data-quantity>${productInfo.quantity}</span>
                <button class="button" data-action="add">+</button>
              </div>
              <div class="block__price">
                  <span class="basket__price">${productInfo.price}</span>
              </div>
          </div>
        </div>
      </div>`

      basket.insertAdjacentHTML('beforeend', map)
    }
    product.querySelector('[data-quantity]').innerText = '1'

    toggleBasket()

    basketPrice()
  }

})    