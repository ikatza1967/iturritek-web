let titularesAvisos=document.querySelectorAll('.titulos-avisos');
let textoAvisos=document.querySelectorAll('.texto-avisos');
let idiomas=document.querySelectorAll(".nav-link");
let espanol=document.querySelector(".es");
let ingles=document.querySelector(".en");
let euskera=document.querySelector(".eu");

const titAvisosEn=[
    "MAIN OFFICE", "LEGAL NOTICE",
    "PRIVACY POLICY",
    "LEGAL NOTICE"
]
const titAvisosEu=[
    
]
const textoAvisoEn=[
   
]


idiomas.forEach((idioma)=>{
    idioma.addEventListener("click",()=>{
        if(idioma.classList.contains("en")){
            espanol.style.backgroundColor="transparent";
            euskera.style.backgroundColor="transparent";
            idioma.style.backgroundColor="rgb(131, 190, 224)"
            titularesAvisosAvisoEn()
           
        }
        else if(idioma.classList.contains("eu")){
            espanol.style.backgroundColor="transparent";
            ingles.style.backgroundColor="transparent";
            idioma.style.backgroundColor="rgb(131, 190, 224)"
           
    
        }
        else if(idioma.classList.contains("es")){
            location.reload()
        }
    })
   
})



function titularesAvisosAvisoEn(){
    for(let i=0;i<titAvisosEn.length;i++){
        titularesAvisos[i].textContent=titAvisosEn[i];
    }         
}
