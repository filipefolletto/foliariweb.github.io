

const fotos = [ 'acessorios',
'BOXES',
'CABECEIRA',
'cadeiras',
'DREAMSPET',
'POLTRONAS',
'VESTUÁRIO',]


fotos.forEach(card => {
    card = createElement()
});



const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className;
    return element
}

const creatCard = (personagem) => {
    const card = createElement('div', 'card')
    
    front.style.backgroundImage = `url('../images/${fotos}.png')`
    card.className = "card"
  

    grid.appendChild(card)
    card.setAttribute('data-personagem', personagem)

    return card
}

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