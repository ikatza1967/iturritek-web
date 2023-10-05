let btnTabs = document.querySelectorAll(".btn-legalidad");
let tabsContent = document.querySelectorAll(".tabs-legalidad");
let logoFter= document.querySelector('.logo-footer');
let btncontacto = document.querySelector('.contactanosbtn');
let sectfooter = document.querySelector('.piedepagina');

btnTabs.forEach((btnTabs, i) =>{
    btnTabs.addEventListener("click", () => {
        tabsContent.forEach(tabsContent => {
            tabsContent.style.display = "none";
        });
        tabsContent[i].style.display = "block";  
    });
});

// btncontacto.addEventListener('click', () => {
//     sectfooter.scrollIntoView({ behavior: "smooth" });
// })






logoFter.addEventListener('click', () => {
    location.href = 'index.html'
  })

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('logo-p')||e.target.classList.contains('grupoPeñascal__img8')){
        location='https://www.grupopenascal.com/'
    }
    else if(e.target.classList.contains('grupoPeñascal__img9')){
        location='http://www.zurtek.net/'
    }
    else if(e.target.classList.contains('grupoPeñascal__img10')){
        location='http://www.laiatzen.com/'
    }
    else if(e.target.classList.contains('grupoPeñascal__img5')){
        location='https://lapikocatering.com/'
    }
})