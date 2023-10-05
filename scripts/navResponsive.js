let barra = document.querySelector('.cont-apartados')
let btnNav = document.querySelector('.btn-nav')
let logoFter= document.querySelector('.logo-footer')

btnNav.addEventListener('click', () => {
  if (barra.style.display === 'block') {
    barra.style.display = 'none'
  } 
})

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('linkscript') || e.target.classList.contains('es')
   || e.target.classList.contains('eu') || e.target.classList.contains('en')) {
    barra.style.display = 'none'
  }
})
    
    logoFter.addEventListener('click', () => {
      location.href = 'index.html'
    })
