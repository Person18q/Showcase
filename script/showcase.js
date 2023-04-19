const buttonAdd = document.querySelectorAll('[data-action="add"]')
const buttonDelete = document.querySelectorAll('[data-action="delete"]')

window.addEventListener('click', e => {
  if(e.target.dataset.action === 'add'){
    const product__button = e.target.closest('.product__button')
    const counter = product__button.querySelector('[data-quantity]')
    if(+counter.textContent < 10){
      counter.textContent = ++counter.textContent
    }
  }
  if(e.target.dataset.action === 'delete'){
      const product__button = e.target.closest('.product__button')
      const counter = product__button.querySelector('[data-quantity]')
      if(+counter.textContent > 1){
      counter.textContent = --counter.textContent
    }
  }
})