let titularesAvisos=document.querySelectorAll('.titulos-avisos');
let textoAviso=document.querySelectorAll('.texto-avisos');
let idiomas=document.querySelectorAll(".nav-link");
let tituloGenAviso=document.querySelector('.alegal');
let tituloGenPolitica=document.querySelector('.polypriv');
let espanol=document.querySelector(".es");
let ingles=document.querySelector(".en");
let euskera=document.querySelector(".eu");


const titlebtnAviso= ["Legal warning", "Legeen abisua"]
const titlebtnPolitica= ["Legal warning", "Legeen abisua"]

const titAvisosEn=[
    "Legislation", "Content and use",
    "Intellectual and industrial property",
    "Links"
]
const titAvisosEu=[
    "Legeria", "Edukia eta erabilera",
    "Jabetza intelektuala eta industriala",
    "Estekak"
]

const politicTitleAEn=[
    "This legal notice (hereinafter, the “Legal Notice”) regulates the use of the Internet portal service www.iturritek.com (hereinafter, the “Website”) of Iturritek SL with CIF B95325445 with registered office Plaza Belategi 1 Bj 48002 - (Bilbao) - Vizcaya.",
    "In general, the relations between Peñascal Kooperatiba with the Users of its telematic services, present on the website, are subject to Spanish legislation and jurisdiction. The parties expressly renounce any jurisdiction that may apply to them and expressly submit to the Courts and Tribunals of Vizcaya to resolve any controversy that may arise in the interpretation or execution of these contractual conditions.",
    "The User is informed, and accepts, that access to this website does not imply, in any way, the beginning of a commercial relationship with Peñascal Kooperatiba. The owner of the website does not identify itself with the opinions expressed therein by its collaborators. Peñascal Kooperatiba reserves the right to make without prior notice any modifications it deems appropriate to its Website, and may change, delete or add the contents and services that are included. provided through it as the way in which they appear presented or located on their servers.",
    "The intellectual property rights of the content of the web pages, their graphic design and codes are owned by Peñascal Kooperatiba and, therefore, their reproduction, distribution, public communication, transformation or any other activity that may be carried out with the contents of the website is prohibited. its web pages or even citing the sources, except with the written consent of Apodaka studio. All trade names, brands or distinctive signs of any kind contained on the Company's websites are the property of their owners and are protected by law.",
    "The presence of links on the Peñascal Kooperatiba web pages is for informational purposes only and in no case does it imply a suggestion, invitation or recommendation regarding them."
]

const politicTitleAEu = [
        "Lege-ohar honek (aurrerantzean, “Lege Oharra”) Iturritek SLren www.iturritek.com Interneteko atariaren zerbitzuaren erabilera (aurrerantzean, “Webgunea”) arautzen du B95325445 IFK duen egoitza Plaza Belategi 1 Bj 48002 - (Bilbo). ) - Bizkaia.",
        "Oro har, Peñascal Kooperatibak bere zerbitzu telematikoen Erabiltzaileekin dituen harremanak, webgunean daudenak, Espainiako legediaren eta jurisdikzioaren mende daude. Alderdiek berariaz uko egiten diote aplika dakiekeen eskumenari, eta espresuki Bizkaiko Epaitegi eta Auzitegien esku jartzen dira kontratu-baldintza hauek interpretatzean edo betetzean sor daitekeen edozein eztabaida ebazteko.",
        "Erabiltzaileari jakinarazten zaio, eta onartzen du, webgune honetara sartzeak ez duela esan nahi, inola ere, Peñascal Kooperatibarekin harreman komertzial bat hastea. Webgunearen jabea ez da bere kolaboratzaileek bertan adierazitako iritziekin identifikatzen, Peñascal Kooperatibak bere webgunean egokitzat jotzen dituen aldaketak aldez aurretik jakinarazi gabe egiteko eskubidea du, eta dauden edukiak eta zerbitzuak aldatu, ezabatu edo gehi ditzake. barne, bere zerbitzarietan aurkeztuta edo kokatuta agertzeko modu gisa emana.",
        "Web orrietako edukien jabetza intelektualaren eskubideak, diseinu grafikoa eta kodeak Peñascal Kooperatibarena dira eta, beraz, horien erreprodukzio, banaketa, komunikazio publiko, eraldaketa edo webguneko edukiekin egin daitekeen beste edozein jarduera. debekatuta dago bere web orriak edo iturriak aipatzea, Apodaka estudioaren idatzizko baimena izan ezik. Konpainiaren webguneetan jasotako merkataritza-izen, marka edo zeinu bereizgarri guztiak haien jabeen jabetzakoak dira eta legeak babestuta daude.",
        "Peñascal Kooperatiba web orrietan estekak egoteak informazio-helburua baino ez du eta inola ere ez du esan nahi horien inguruko iradokizun, gonbidapen edo gomendiorik."
    


]


idiomas.forEach((idioma)=>{
    idioma.addEventListener("click",()=>{
        if(idioma.classList.contains("en")){
            espanol.style.backgroundColor="transparent";
            euskera.style.backgroundColor="transparent";
            idioma.style.backgroundColor="rgb(131, 190, 224)"
            titularesAvisosAvisoEn()
           tituloGenAviso.textContent=titlebtnAviso[0];
           rellenarTextoALegalEn()

        }

        else if(idioma.classList.contains("eu")){
            espanol.style.backgroundColor="transparent";
            ingles.style.backgroundColor="transparent";
            idioma.style.backgroundColor="rgb(131, 190, 224)"
            titularesAvisosAvisoEu()
            tituloGenAviso.textContent=titlebtnAviso[1];
            rellenarTextoALegalEu()
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
function titularesAvisosAvisoEu(){
    for(let i=0;i<titAvisosEu.length;i++){
        titularesAvisos[i].textContent=titAvisosEu[i];
    }         
}

function rellenarTextoALegalEn(){
    for(let i=0;i<politicTitleAEn.length;i++){
        textoAviso[i].textContent=politicTitleAEn[i];
    }
}

function rellenarTextoALegalEu(){
    for(let i=0;i<politicTitleAEu.length;i++){
        textoAviso[i].textContent=politicTitleAEu[i];
    }
}