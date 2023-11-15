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

const creatCard = (imgs) => {
    const card = createElement('div', 'card-produto')

    const divCardImg = createElement('div', 'div-card-img')
    const imgProduto = createElement('img', 'imgProduto')
    imgProduto.src = `..img/grid/${img}.png`

    const saibaMais = createElement('button', 'saibaMais')
    saibaMais.innerHTML = `Saiba mais`
  

    const divNomeProduto = createElement('div', 'div-nome-produto')
    const h4Nome = createElement('h4', 'nomeProduto')
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

    card.appendChild(divNomeProduto)
    card.appendChild(divCardImg)
    card.appendChild(saibaMais)


    return card

    
}

fotos.forEach((imgs) => {

    const cardImgs = creatCard(imgs)
    paiCard.appendChild(cardImgs)
});


    