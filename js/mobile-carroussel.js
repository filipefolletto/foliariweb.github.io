const paiCardM = document.querySelector(".div-containerMobile-produtos")

const fotosM = [ 
'colchoes',
'boxes',
'cabeceiras',
'cadeiras',
'dreamspet',
'poltronas',
'vestuarios',
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
    
    imgProduto.src = `img/mobileCarrocel/${imgs}.png`

    const divNomeProduto = createElementM('div', 'div-nomeMobile-produto')
    const h4Nome = createElementM('h4', 'nomeProdutoMobile')
    h4Nome.innerHTML = `${imgs}`
    


     //hover dos cards_______________________________________________________________________________________
     card.addEventListener('mouseover', () => {
        card.classList.add('biggerCard');

    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('biggerCard');
        
    });

    divCardImg.appendChild(imgProduto)
    divNomeProduto.appendChild(h4Nome)

    card.appendChild(divCardImg)
    card.appendChild(divNomeProduto)


    
    return card
    
}

const loadGame = () => {
   fotosM.forEach((imgs) => {

       const cardImgs = creatCardM(imgs)
       paiCardM.appendChild(cardImgs)
    });
}




 
window.onload = () => { 

     loadGame()
}