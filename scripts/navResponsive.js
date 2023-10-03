let btnNav = document.querySelector(".btn-nav");
let contNav = document.querySelector(".cont-apartados");
btnNav.addEventListener("click", (i)=>{
    if (contNav.style.backgroundColor === 'rgba(209, 221, 228, 0.416)') {
        contNav.style.backgroundColor = 'transparent';
      } else {
        contNav.style.backgroundColor = ' rgba(209, 221, 228, 0.416)';
      }
    });