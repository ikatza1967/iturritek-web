let idiomas=document.querySelectorAll(".nav-link");

idiomas.forEach((idioma)=>{
    idioma.addEventListener("click",()=>{
        idioma.classList.contains("en");
        alert("hola")
    })
})