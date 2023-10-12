const paiCard = document.querySelector(".div-container-produtos")

const fotos = [ 
'acessorios',
'boxes',
'cabeceiras',
'cadeiras',
'dreamspet',
'poltronas',
'vestuario',
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
    // imgProduto.src = `url(../img/${fotos}.png)`
    imgProduto.src = `../img/${imgs}.png`

    // const saibaMais = createElement('button', 'saibaMais')
    // saibaMais.innerHTML = `Saiba mais`
  

    const divNomeProduto = createElement('div', 'div-nome-produto')
    const h4Nome = createElement('h4', 'nomeProduto')
    h4Nome.innerHTML = `${imgs}`

    
    



    
    
    // front.style.backgroundImage = `url('../images/${fotos}.png')`

    divCardImg.appendChild(imgProduto)
    divNomeProduto.appendChild(h4Nome)

    card.appendChild(divNomeProduto)
    card.appendChild(divCardImg)
    // card.appendChild(saibaMais)
    

    


    
    // console.log(paiCard)
    return card

    // card.setAttribute('data-personagem', personagem)
    
}

fotos.forEach((imgs) => {

    const cardImgs = creatCard(imgs)
    paiCard.appendChild(cardImgs)
});



window.onload = () => { 

    creatCard()    
}

//botoes do corrousel_________________________________________________________________

const scrollLeftButton = document.getElementById('previus-cards');
const scrollRightButton = document.getElementById('next-cards');

scrollLeftButton.addEventListener('click', () => {
    paiCard.scrollLeft -= 1000; 
  });

  scrollRightButton.addEventListener('click', () => {
    paiCard.scrollLeft += 1000; 
  });


  paiCard.addEventListener('scroll', () => {
    if(paiCard.scrollLeft <= 0){
        scrollLeftButton.classList.add('hidden');
    }else {
        // Caso contrário, remova a classe 'hidden' para mostrar a seta esquerda
        scrollLeftButton.classList.remove('hidden');
    }
    });

 //_______________________________________________________________________________________