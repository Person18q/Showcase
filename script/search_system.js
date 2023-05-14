document.querySelector('.search').oninput = function () {
  const val = this.value
  const elastic = document.querySelectorAll('.product')
  if(val != ''){
    elastic.forEach(elem => {
      if(elem.innerText.search(val) == -1){
        elem.classList.add('hidden')
      }else{
        elem.classList.remove('hidden')
      }
    })
  }else{
    elastic.forEach(elem => {
        elem.classList.remove('hidden')
    })
  }
}