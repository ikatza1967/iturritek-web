let btnTabs = document.querySelectorAll(".btn-legalidad");
let tabsContent = document.querySelectorAll(".tabs-legalidad");

btnTabs.forEach((btnTabs, i) =>{
    btnTabs.addEventListener("click", () => {
        tabsContent.forEach(tabsContent => {
            tabsContent.style.display = "none";
        });
        tabsContent[i].style.display = "block";  
    });
});