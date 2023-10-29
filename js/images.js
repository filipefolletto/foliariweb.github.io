const images = {
    IMAGE_LOGO: "IMAGE1.PNG",
    IMAGE_HEADER: "IMAGE2.PNG",

}






const paiCardNav = document.querySelector(".nav-list")

const fotosNav= [ 
'colchoes',
'boxes',
'cabeceiras',
'cadeiras',
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










// class MobileNavbar {
//     constructor(mobileMenu, navList, navLinks) {
//         this.mobileMenu = document.querySelector(mobileMenu);
//         this.navList = document.querySelector(navList);
//         this.navLinks = document.querySelectorAll(navLinks)
//         this.activeClass = "active"
//         this.handleClick = this.handleClick.bind(this);
//     }

//     animateLinks() {
//         this.navLinks.forEach((link, index) => {
//           link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s `);
//         });
//     }

    
//     handleClick() {
//         this.navList.classList.toggle(this.activeClass);
//         this.mobileMenu.classList.toggle(this.activeClass);

//         this.animateLinks();
//     }

//     addClickEvent() {
//       this.mobileMenu.addEventListener("click", this.handleClick);
//     }

//     init() {
//         if (this.mobileMenu) {
//             this.addClickEvent();
//         }
//         return this;
//     }

// }

// const mobileNavbar = new MobileNavbar(
//     ".mobile-menu",
//     ".nav-list",
//     ".nav-list-li",
// );

// mobileNavbar.init();










// const creatCardNav = (imgs) => {
//     const listaPai = createElementNav('li', 'listaPai-produtoM')


//     const imgLista = createElementNav('img', 'imgMobileProduto')
    
//     imgLista.src = `../img/mobileCarrocel/${imgs}.png`

//     const linkLista = createElementNav('a', 'div-cardMobile-img')
//     const spanLista = createElementNav('span', 'div-cardMobile-img')
//     spanLista.innerHTML = `${imgs}`
   

//      //hover dos cards_______________________________________________________________________________________
//      listaPai.addEventListener('mouseover', () => {
//         listaPai.classList.add('biggerCard');

//     });
//     listaPai.addEventListener('mouseout', () => {
//         listaPai.classList.remove('biggerCard');
        
//     });

//     linkLista.appendChild(imgLista)
//     divNomeProduto.appendChild(h4Nome)

//     listaPai.appendChild(linkLista)
//     listaPai.appendChild(divNomeProduto)


    
//     return listaPai
    
// }

// const loadGame = () => {
//    fotosNav.forEach((imgs) => {

//        const cardImgs = creatCardM(imgs)
//        paiCardNav.appendChild(cardImgs)
//     });
// }
