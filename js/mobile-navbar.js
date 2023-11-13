class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s `);
        });
    }

    
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);

        this.animateLinks();
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }

}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".pai-list-mobile",
    ".nav-list-li",
);

mobileNavbar.init();






// ///////////////////////////////////////




const paiCardNav = document.querySelector(".nav-list")
const mobileMenu = document.querySelector(".mobile-menu")


const fotosNav= [ 
'colchoes',
'boxes',
'cabeceiras',
'cadeiras',
'poltronas',
'acessorios',
'vestuarios',
'dreamspet'
]


const createElementNav = (tag, className) => {
    const elementNav = document.createElement(tag)
    elementNav.className = className;
    return elementNav
}



const creatCardNav = (imgs, index) => {
    const listaPai = createElementNav('li', 'nav-list-li')


    const containerImgLista = createElementNav('div', 'li-container-img')
    const imgLista = createElementNav('img', 'nav-list-img')
    imgLista.src = `img/imgNavMenu/${imgs}.png`

    const containerLinkLista = createElementNav('div', 'li-container-links')
    const linkLista = createElementNav('a', 'nav-list-a')
    const spanLista = createElementNav('span', '')
    spanLista.innerHTML = `${imgs}`
   
    linkLista.appendChild(spanLista)



    imgLista.addEventListener('mouseover', () => {
        imgLista.classList.add('biggerCard');

    });
    imgLista.addEventListener('mouseout', () => {
        imgLista.classList.remove('biggerCard');
        
    });


    containerImgLista.appendChild(imgLista)
    containerLinkLista.appendChild(linkLista)
    

    listaPai.appendChild(containerImgLista)
    listaPai.appendChild(containerLinkLista)

    listaPai.classList.add("navLinkFadeAnimation");

    return listaPai
}





let menuAberto = false; // Inicialmente, o menu está fechado
let elementosAdicionados = false; // Inicialmente, nenhum elemento foi adicionado
let timeoutIDs = []; // Armazena os IDs de timeout para cancelar quando o menu é fechado

mobileMenu.addEventListener('click', () => {
    if (!menuAberto) {
        // Abre o menu
        if (!elementosAdicionados) {
            elementosAdicionados = true;
            fotosNav.forEach((imgs, index) => {
                const timeoutID = setTimeout(() => {
                    const linhaImgsLinks = creatCardNav(imgs, index);
                    paiCardNav.appendChild(linhaImgsLinks);
                }, 500 * (index + 1))
                timeoutIDs.push(timeoutID);
            });
        }
    } else {
        // Fecha o menu removendo os elementos e interrompendo os timeouts
        elementosAdicionados = false;
        timeoutIDs.forEach(timeoutID => {
            clearTimeout(timeoutID); // Cancela os timeouts agendados
        });
        const elementosNav = document.querySelectorAll('.nav-list-li');
        elementosNav.forEach(elemento => {
            elemento.classList.remove("navLinkFadeAnimation");
        });
        setTimeout(() => {
            elementosNav.forEach(elemento => {
                paiCardNav.removeChild(elemento);
            });
        }, 500);
    }

    menuAberto = !menuAberto; // Alterna o estado do menu
});
















