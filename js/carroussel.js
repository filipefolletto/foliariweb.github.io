const paiCard = document.querySelector(".div-container-produtos")

const fotos = [ 
'acessorios',
'boxes',
'cabeceiras',
'cadeiras',
'dreamspet',
'poltronas',
'vestuario',]


// fotos.forEach(card => {
//     card = createElement()
// });



const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className;
    return element
}

const creatCard = (personagem) => {
    const card = createElement('div', 'card-produto')

    const divCardImg = createElement('div', 'div-card-img')
    const imgProduto = createElement('img', 'imgProduto')
    // imgProduto.src = `url(../img/${fotos}.png)`
    imgProduto.src = `../img/${fotos[1]}.png`
  

    const divNomeProduto = createElement('div', 'div-nome-produto')
    const h4Nome = createElement('h4', 'nomeProduto')
    h4Nome.innerHTML = 'ahhahahah'

    
    
    // front.style.backgroundImage = `url('../images/${fotos}.png')`

    divCardImg.appendChild(imgProduto)
    divNomeProduto.appendChild(h4Nome)

    card.appendChild(divCardImg)
    card.appendChild(divNomeProduto)

    paiCard.appendChild(card)
    
    // console.log(paiCard)
    return paiCard

    // paiCard .appendChild(card)
    // card.setAttribute('data-personagem', personagem)
    
}

creatCard()

















// const createElement = (tag, className) => {
//     const element = document.createElement(tag)
//     element.className = className;
//     return element
// }



//     front.style.backgroundImage = `url('../images/${personagem}.png')`
//     // card.className = "card"
//    // front.className = "face front"
//    // back.className = "face back"


//     card.appendChild(front)
//     card.appendChild(back)
//     // grid.appendChild(card)

//     card.addEventListener('click', revealCard)
//     card.setAttribute('data-personagem', personagem)

//     return card
// }