class Beer {

    static all =[]
    
    constructor(data) {
        this.data = data 
    }

    generateHTML = () => {
        const {id, name, brewery, description, ibu, abv, image, likes} = this.data
        this.beerContainer.innerHTML +=
        `<div class="beer-card" data-id=${id}>
        <img src=${image} alt=${name}</img>
        <h1>${name} • ${brewery}</h1>
        <h2>IBU: ${ibu} ABV: ${abv}</h2>
        <p>${description}</p>
        <p>Likes: ${likes}</p>
        <button class="like-button">Like ${name}</button>
        </div>`  

    }

    renderBeer(){
        const cardDiv = document.createElement('div')
        cardDiv.className = "card"
        cardDiv.dataset.id = this.beer.id
        cardDiv.innerHTML = this.generateHTML()
        beerList.append(cardLi)
        this.card = cardDiv
        this.addEventListeners()
      }
    

    get beerContainer() {
        return document.querySelector(".beer-container")
    }

    addEventListeners(){
    this.card.querySelector(".like-button").addEventListener("click", console.log("test"))
    }


}