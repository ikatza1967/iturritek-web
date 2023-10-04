let barra = document.querySelector('.cont-apartados')
let btnNav = document.querySelector('.btn-nav')

btnNav.addEventListener('click', () => {
  barra.style.display = 'block'
})

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('linkscript')) {
    barra.style.display = 'none'
  }
})
    

    
