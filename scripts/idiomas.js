let idiomas=document.querySelectorAll(".nav-link");
let tituloHeader=document.querySelector(".Cont-header__presentIturritek-title");
let textoHeader=document.querySelector(".Cont-header__presentIturritek-text");
let vinculosHeader=document.querySelectorAll(".linkscript");
let btnContact=document.querySelector(".contactanosbtn");


const encabezadoNav1= {
    en:"ABOUT US",
    eu:"",
}
const encabezadoNav2={
    en:"SERVICES",
    eu:"",
}
const encabezadoNav3={
    en:"PEÑASCAL GROUP",
    eu:"",
}
const encabezadoTitle={
    en:"2O YEARS OF EXPERIENCE",
    eu:"",
}
const encabezadoText={
    en:"Iturritek is an entrepreneurial reality that punishes projects and installations, maintenance and"
    +"mountings as a reference and that contributes to the generation of wealth and employment in our society, from "
    +"considerations, values and social styles.",
    eu:"",
}
const encabezadoBtn={
    en:"Contact Us",
    eu:"", 
}

idiomas.forEach((idioma)=>{
    idioma.addEventListener("click",()=>{
        if(idioma.classList.contains("en")){
            idiomaEn()
            recorrernavEn()
          
        }
        else if(idioma.classList.contains("eu")){
            
        }
        else if(idioma.classList.contains("es")){
            location.reload()
        }
    })
   
})

function recorrernavEn(){
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

