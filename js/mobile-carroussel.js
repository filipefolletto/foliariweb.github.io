const paiCardM = document.querySelector(".div-containerMobile-produtos")

const fotosM = [ 
'colchoes',
'boxes',
'cabeceiras',
'cadeiras',
'dreamspet',
'poltronas',
'vestuario',
'acessorios'
]



const createElementM = (tag, className) => {
    const elementM = document.createElement(tag)
    elementM.className = className;
    return elementM
}




const creatCardM = (imgs) => {
    const card = createElementM('div', 'card-produtoM')

    const divCardImg = createElementM('div', 'div-cardMobile-img')
    const imgProduto = createElementM('img', 'imgMobileProduto')
    // imgProduto.src = `url(../img/${fotos}.png)`
    imgProduto.src = `../img/mobileCarrocel/${imgs}.png`

    // const saibaMais = createElement('button', 'saibaMais')
    // saibaMais.innerHTML = `Saiba mais`
  

    const divNomeProduto = createElementM('div', 'div-nomeMobile-produto')
    const h4Nome = createElementM('h4', 'nomeProdutoMobile')
    h4Nome.innerHTML = `${imgs}`
    // h4Nome.style.textAlign = "center";
   


    //hover dos cards_______________________________________________________________________________________
    card.addEventListener('mouseover', () => {
        card.classList.add('biggerCard');

    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('biggerCard');
        
    });


    
    // front.style.backgroundImage = `url('../images/${fotos}.png')`

    divCardImg.appendChild(imgProduto)
    divNomeProduto.appendChild(h4Nome)

    card.appendChild(divCardImg)
    card.appendChild(divNomeProduto)
    // card.appendChild(saibaMais)

    
    // console.log(paiCard)
    return card

    // card.setAttribute('data-personagem', personagem)
    
}

const loadGame = () => {
   fotosM.forEach((imgs) => {

       const cardImgs = creatCardM(imgs)
       paiCardM.appendChild(cardImgs)
    });
}



//botoes do corrousel_________________________________________________________________

// const scrollLeftButton = document.getElementById('previus-cardsM');
// const scrollRightButton = document.getElementById('next-cardsM');

// scrollLeftButton.addEventListener('click', () => {
//     paiCardM.scrollLeft -= 1000; 
//   });

//   scrollRightButton.addEventListener('click', () => {
//     paiCardM.scrollLeft += 1000; 
//   });
 


//aparece botoes se mouse em cima

    paiCardM.addEventListener('mouseover', () => {
        let maxScrollLeft = paiCardM.scrollWidth -  paiCardM.clientWidth ;
        if(paiCardM.scrollLeft != 0){
            scrollLeftButton.classList.add('shower');
        }if(parseInt(paiCardM.scrollLeft) != maxScrollLeft){
             scrollRightButton.classList.add('shower');
        }
        
        });
        

//remove botoes se mouse sai
        paiCardM.addEventListener('mouseout', () => {
            scrollLeftButton.classList.remove('shower');
            scrollRightButton.classList.remove('shower');
       });
      

 
window.onload = () => { 

     loadGame()
}