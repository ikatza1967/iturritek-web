let titularesAvisos=document.querySelectorAll('.titulos-avisos');
let textoAviso=document.querySelectorAll('.texto-avisos');
let idiomas=document.querySelectorAll(".nav-link");
let tituloGenAviso=document.querySelector('.alegal');
let tituloGenPolitica=document.querySelector('.polypriv');
let titGenAviso=document.querySelector('.titu-aviso');
let titGenPolitica=document.querySelector('.titu-politicas');
let subTitlePolitic=document.querySelectorAll('.titulos-politicas');
let subPolitica=document.querySelectorAll('.subtitulos-politicas');
let textoPolitica=document.querySelectorAll('.politic__text');
let espanol=document.querySelector(".es");
let ingles=document.querySelector(".en");
let euskera=document.querySelector(".eu");


const titlebtnAviso= ["Legal warning", "Legeen abisua"]
const titlebtnPolitica= ["Policies and privacy","Politikak eta pribatutasuna"]

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

const titPoliticaEn=[
    "WHO IS RESPONSIBLE FOR THE PROCESSING OF THE DATA?",
    "WHAT IS THE DATA CONSERVATION PERIOD?",
    "WHAT INFORMATION DO WE COLLECT?",
    "ORIGIN OF DATA",
    "WHAT DO WE USE YOUR INFORMATION?",
    "HOW DO WE PROTECT YOUR INFORMATION?",
    "DO WE DISCLOSE INFORMATION TO THIRD PARTIES?",
    "Google (to send our email newsletter)",
    "Facebook (for targeted advertising)",
    "Active campaign (for the use of the electronic newsletter)",
    "THIRD PARTY LINKS",
    "MINORS",
    "YOUR CONSENT",
    "CHANGES TO OUR PRIVACY POLICY",

]
const titPoliticaEu=[
    "NOR DA DATUEN TRATAMENDUAREN ARDURADUNA?",
    "ZEIN DA DATUAK KONTSERBATZEKO EPEA?",
    "ZEIN INFORMAZIO BILDU DUGU?",
    "DATUEN JATORRIA",
    "ZER ERABILTZEN DUGU ZURE INFORMAZIOA?",
    "ZER ERABILTZEN DUGU ZURE INFORMAZIOA?",
    "INFORMAZIOA HIRUGARREN PERTSONEI IKUSLATZEN AL DIEGU?",
     "Google (to send our email newsletter)",
    "Facebook (zuzendutako iragarkietarako)",
    "Kanpaina aktiboa (buletin elektronikoa erabiltzeko)",
    "HIRUGARRENEN LOTURAK",
    "ADIN GABEKOAK",
    "ZURE ADOSTASUNA",
    "GURE PRIBATUTASUN POLITIKAN ALDAKETAK",
 ]


const subTitlePoliticaEn=[
    "To manage subscriptions and purchases",
    "To personalize your experience",
    "To improve our website",
    "To improve customer service",
    "To process transactions",
    "To administer a contest, promotion, survey, or other site feature",
    "To send periodic emails",
    "Note:",
]
const subTitlePoliticaEu=[
    "Harpidetzak eta erosketak kudeatzeko",
    "Zure esperientzia pertsonalizatzeko",
    "Gure webgunea hobetzeko",
    "Bezeroarentzako zerbitzua hobetzeko",
    "Transakzioak prozesatzeko",
    "Lehiaketa, promozio, inkesta edo guneko beste eginbide bat kudeatzeko",
    "Aldizkako mezu elektronikoak bidaltzeko",
    "Oharra:"  
]


const avisoTextAEn=[
    "This legal notice (hereinafter, the “Legal Notice”) regulates the use of the Internet portal service www.iturritek.com (hereinafter, the “Website”) of Iturritek SL with CIF B95325445 with registered office Plaza Belategi 1 Bj 48002 - (Bilbao) - Vizcaya.",
    "In general, the relations between Peñascal Kooperatiba with the Users of its telematic services, present on the website, are subject to Spanish legislation and jurisdiction. The parties expressly renounce any jurisdiction that may apply to them and expressly submit to the Courts and Tribunals of Vizcaya to resolve any controversy that may arise in the interpretation or execution of these contractual conditions.",
    "The User is informed, and accepts, that access to this website does not imply, in any way, the beginning of a commercial relationship with Peñascal Kooperatiba. The owner of the website does not identify itself with the opinions expressed therein by its collaborators. Peñascal Kooperatiba reserves the right to make without prior notice any modifications it deems appropriate to its Website, and may change, delete or add the contents and services that are included. provided through it as the way in which they appear presented or located on their servers.",
    "The intellectual property rights of the content of the web pages, their graphic design and codes are owned by Peñascal Kooperatiba and, therefore, their reproduction, distribution, public communication, transformation or any other activity that may be carried out with the contents of the website is prohibited. its web pages or even citing the sources, except with the written consent of Apodaka studio. All trade names, brands or distinctive signs of any kind contained on the Company's websites are the property of their owners and are protected by law.",
    "The presence of links on the Peñascal Kooperatiba web pages is for informational purposes only and in no case does it imply a suggestion, invitation or recommendation regarding them."
]
const avisoTextAEu = [
        "Lege-ohar honek (aurrerantzean, “Lege Oharra”) Iturritek SLren www.iturritek.com Interneteko atariaren zerbitzuaren erabilera (aurrerantzean, “Webgunea”) arautzen du B95325445 IFK duen egoitza Plaza Belategi 1 Bj 48002 - (Bilbo). ) - Bizkaia.",
        "Oro har, Peñascal Kooperatibak bere zerbitzu telematikoen Erabiltzaileekin dituen harremanak, webgunean daudenak, Espainiako legediaren eta jurisdikzioaren mende daude. Alderdiek berariaz uko egiten diote aplika dakiekeen eskumenari, eta espresuki Bizkaiko Epaitegi eta Auzitegien esku jartzen dira kontratu-baldintza hauek interpretatzean edo betetzean sor daitekeen edozein eztabaida ebazteko.",
        "Erabiltzaileari jakinarazten zaio, eta onartzen du, webgune honetara sartzeak ez duela esan nahi, inola ere, Peñascal Kooperatibarekin harreman komertzial bat hastea. Webgunearen jabea ez da bere kolaboratzaileek bertan adierazitako iritziekin identifikatzen, Peñascal Kooperatibak bere webgunean egokitzat jotzen dituen aldaketak aldez aurretik jakinarazi gabe egiteko eskubidea du, eta dauden edukiak eta zerbitzuak aldatu, ezabatu edo gehi ditzake. barne, bere zerbitzarietan aurkeztuta edo kokatuta agertzeko modu gisa emana.",
        "Web orrietako edukien jabetza intelektualaren eskubideak, diseinu grafikoa eta kodeak Peñascal Kooperatibarena dira eta, beraz, horien erreprodukzio, banaketa, komunikazio publiko, eraldaketa edo webguneko edukiekin egin daitekeen beste edozein jarduera. debekatuta dago bere web orriak edo iturriak aipatzea, Apodaka estudioaren idatzizko baimena izan ezik. Konpainiaren webguneetan jasotako merkataritza-izen, marka edo zeinu bereizgarri guztiak haien jabeen jabetzakoak dira eta legeak babestuta daude.",
        "Peñascal Kooperatiba web orrietan estekak egoteak informazio-helburua baino ez du eta inola ere ez du esan nahi horien inguruko iradokizun, gonbidapen edo gomendiorik."
]

const politicTextAEn=[
    "Our Privacy Policy is designed to help you understand how we collect and use the personal information you provide to us and to help you make informed decisions when using our website. When you visit our website, you may provide us with two types of information: personal information that you deliberately choose to disclose that is collected on an individual basis, and website usage information collected on an aggregate basis as you and others browse our website.",
    "The Privacy Policy of Iturritek SL, hereinafter “the company”, is governed by compliance with current legislation on the protection of personal data: REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 27 April 2016 (hereinafter, RGPD), and by Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), as well as by Organic Law 15/1999, of December 13, on Protection of Personal Data and its implementing regulations while it remains in force. At the company we are committed to ensuring the privacy of our users' personal data. This policy, in accordance with the principle of active responsibility, will be applicable in the event that users decide to fill out a form on their website where personal data is collected, without prejudice to what is indicated in the “Privacy Clause” applicable to each form. concrete.",

    "Company Name: Iturritek SL",
    "CIF B95325445",
    "Registered office: Plaza Belategi 1 Bj 48002 - (Bilbao) - Vizcaya.",
    "Contact Data Protection Officer (DPO): XXX@XXX",
]
const politicTextAEu=[
    
]

idiomas.forEach((idioma)=>{
    idioma.addEventListener("click",()=>{
        if(idioma.classList.contains("en")){
            espanol.style.backgroundColor="transparent";
            euskera.style.backgroundColor="transparent";
            idioma.style.backgroundColor="rgb(131, 190, 224)"
            titularesAvisosAvisoEn()
           tituloGenAviso.textContent=titlebtnAviso[0];
           tituloGenPolitica.textContent=titlebtnPolitica[0];
           titGenAviso.textContent=titlebtnAviso[0];
           titGenPolitica.textContent=titlebtnPolitica[0];
           rellenarTextoALegalEn()

           titularesPoliticaEn()
           subPoliticaEn()

        }

        else if(idioma.classList.contains("eu")){
            espanol.style.backgroundColor="transparent";
            ingles.style.backgroundColor="transparent";
            idioma.style.backgroundColor="rgb(131, 190, 224)"
            titularesAvisosAvisoEu()
            tituloGenAviso.textContent=titlebtnAviso[1];
            tituloGenPolitica.textContent=titlebtnPolitica[1];
            titGenAviso.textContent=titlebtnAviso[1];
            titGenPolitica.textContent=titlebtnPolitica[1];
            rellenarTextoALegalEu()

            titularesPoliticaEu()
            subPoliticaEu()
        }

        else if(idioma.classList.contains("es")){
            location.reload()
        }
    })
   
})


/////////////////////////funciones de traduccion de Avisos////////////////////////

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
    for(let i=0;i<avisoTextAEn.length;i++){
        textoAviso[i].textContent=avisoTextAEn[i];
    }
}

function rellenarTextoALegalEu(){
    for(let i=0;i<avisoTextAEu.length;i++){
        textoAviso[i].textContent=avisoTextAEu[i];
    }
}

/////////////////////////funciones de traduccion de politica////////////////////////
function titularesPoliticaEn(){
    for(let i=0;i<titPoliticaEn.length;i++){
        subTitlePolitic[i].textContent=titPoliticaEn[i];
    }         
}
function titularesPoliticaEu(){
    for(let i=0;i<titPoliticaEu.length;i++){
        subTitlePolitic[i].textContent=titPoliticaEu[i];
    }         
}

function subPoliticaEn(){
    for(let i=0;i<subTitlePoliticaEn.length;i++){
        subPolitica[i].textContent=subTitlePoliticaEn[i];
    }   
}
function subPoliticaEu(){
    for(let i=0;i<subTitlePoliticaEu.length;i++){
        subPolitica[i].textContent=subTitlePoliticaEu[i];
    }        
}

function rellenarTextoPoliticaEn(){
    for(let i=0;i<avisoTextAEn.length;i++){
        
    }
}

function rellenarTextoPoliticaEu(){
    for(let i=0;i<avisoTextAEu.length;i++){
      
    }
}
