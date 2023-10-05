let btnTabs = document.querySelectorAll(".btn-legalidad");
let tabsContent = document.querySelectorAll(".tabs-legalidad");
let logoFter= document.querySelector('.logo-footer');
let btncontacto = document.querySelector('.contactobtn');
let sectfooter = document.querySelector('.piedepagina');

btnTabs.forEach((btnTabs, i) =>{
    btnTabs.addEventListener("click", () => {
        tabsContent.forEach(tabsContent => {
            tabsContent.style.display = "none";
        });
        tabsContent[i].style.display = "block";  
    });
});

logoFter.addEventListener('click', () => {
    location.href = 'index.html'
  })

btncontacto.addEventListener('click', () => {
    sectfooter.scrollIntoView({ behavior: "smooth" });
})