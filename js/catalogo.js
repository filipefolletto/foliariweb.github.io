const paiCard = document.querySelector(".section-container-camas")


const fotos = [ 
    'cama1',
    'cama2',
    'cama3',
    'cama4',
    'cama5'
    ]
    

    
const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className;
    return element
}

const creatCard = (img) => {
    

    const card = createElement('div', 'card-produto')

    const divCardImg = createElement('div', 'div-card-img')
    const imgProduto = createElement('img', 'img-produto-card')
    imgProduto.src = ` ../img/produtos/${img}.png`

    const saibaMais = createElement('button', 'saibaMais')
    saibaMais.innerHTML = `Saiba mais`
   
    const linha = createElement('h2', 'linha')
    linha.innerHTML = `Linha`

    const divNomeProduto = createElement('div', 'div-nome-produto')
    const h4Nome = createElement('h4', 'nomeProduto')
    h4Nome.innerHTML = `${img}`





    

    divCardImg.appendChild(imgProduto)
    divNomeProduto.appendChild(h4Nome)

   
    card.appendChild(linha)
    card.appendChild(divNomeProduto)
    card.appendChild(saibaMais)
    card.appendChild(divCardImg)
    
    return card
    
}

fotos.forEach((img) => {

    const cardImgs = creatCard(img)
    paiCard.appendChild(cardImgs)
});


    