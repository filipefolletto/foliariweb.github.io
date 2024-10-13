const paiCard = document.querySelector(".div-container-produtos")

const fotos = [ 
'Colchões',
'box',
'cabeceiras',
'Linha PET',
'poltronas',
'vestuário',
'acessórios'
]



const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className;
    return element
}




const creatCard = (imgs) => {

    
   

    const card = createElement('div', 'card-produto')
    const linkproduto = createElement('a','link-produto')

    linkproduto.href =  `web/${imgs}.html` 

    const divCardImg = createElement('div', 'div-card-img')
    const imgProduto = createElement('img', 'imgProduto')

   
    // linkproduto.href =  `foliari.com.br/web/${img}` 
   

  
    imgProduto.src = `img/carroucelDesktop/${imgs}.jpg`

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

    
    card.addEventListener('click', () => {
        
        window.location.href = `web/${imgs}.html` 

    })

  

    divCardImg.appendChild(imgProduto)
    divNomeProduto.appendChild(h4Nome)


    card.appendChild(divNomeProduto)
    card.appendChild(divCardImg)
    card.appendChild(linkproduto)
    
    return card

    // card.setAttribute('data-personagem', personagem)
    
}

fotos.forEach((imgs) => {

    const cardImgs = creatCard(imgs)
    paiCard.appendChild(cardImgs)
});





//botoes do corrousel_________________________________________________________________

const scrollLeftButton = document.getElementById('previus-cards');
const scrollRightButton = document.getElementById('next-cards');

scrollLeftButton.addEventListener('click', () => {
    paiCard.scrollLeft -= 1000; 
  });

  scrollRightButton.addEventListener('click', () => {
    paiCard.scrollLeft += 1000; 
  });



//aparece botoes se mouse em cima

    paiCard.addEventListener('mouseover', () => {
        let maxScrollLeft = paiCard.scrollWidth -  paiCard.clientWidth ;
        if(paiCard.scrollLeft != 0){
            scrollLeftButton.classList.add('shower');
        }if(parseInt(paiCard.scrollLeft) != maxScrollLeft){
             scrollRightButton.classList.add('shower');
        }
        
        });
        

//remove botoes se mouse sai
        paiCard.addEventListener('mouseout', () => {
            scrollLeftButton.classList.remove('shower');
            scrollRightButton.classList.remove('shower');
       });
      

 
       window.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
        }
    });
