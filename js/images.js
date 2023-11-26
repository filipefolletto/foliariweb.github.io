const images = {
    IMAGE_LOGO: "IMAGE1.PNG",
    IMAGE_HEADER: "IMAGE2.PNG",

}
const paiCardNav = document.querySelector(".nav-list")

const fotosNav= [ 
'colchoes',
'boxes',
'cabeceiras',
'dreamspet',
'poltronas',
'vestuarios',
'acessorios'
]



const createElementNav = (tag, className) => {
    const elementNav = document.createElement(tag)
    elementNav.className = className;
    return elementNav
}








