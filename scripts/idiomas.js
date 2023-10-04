import {encabezadoNav1, encabezadoNav2, encabezadoNav3, encabezadoTitle, encabezadoText, encabezadoBtn } from "..scripts/objetosDeIdiomas.js";

let idiomas=document.querySelectorAll(".nav-link");
let tituloHeader=document.querySelector(".Cont-header__presentIturritek-title");
let textoHeader=document.querySelector(".Cont-header__presentIturritek-text");
let vinculosHeader=document.querySelectorAll(".linkscript");
let btnContact=document.querySelector(".contactanosbtn");


idiomas.forEach((idioma)=>{
    idioma.addEventListener("click",()=>{
        if(idioma.classList.contains("en")){
            idiomaEn()
            recorrernav()
            console.log(encabezadoNav1.en)
        }
        else if(idioma.classList.contains("eu")){
            
        }
        else if(idioma.classList.contains("es")){
            location.reload()
        }
    })
   
})

function recorrernav(){
    for (let i=0;i<vinculosHeader.length;i++){
        vinculosHeader[0].textContent=encabezadoNav1.en
        vinculosHeader[1].textContent=encabezadoNav2.en
        vinculosHeader[2].textContent=encabezadoNav3.en
     }
}

function idiomaEn(){
tituloHeader.textContent=encabezadoTitle.en;
textoHeader.textContent=encabezadoText.en;
btnContact.textContent=encabezadoBtn.en;
}

