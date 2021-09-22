class Beer {

    static all =[]
    
    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
    }

    generateHTML = () => {
        const {id, name, brewery, description, ibu, abv, image, likes} = this.data
        this.beerContainer.innerHTML +=
        `<div class="beer-card" data-id=${id}>
        <img src=${image} alt=${name}</img>
        <h1>${name} • ${brewery}</h1>
        <h2>IBU: ${ibu} ABV: ${abv}</h2>
        <p>${description}</p>
        <span class="likes-count">${likes} Likes</span>
        <button class="like-button" id="like-btn">Like ${name}</button>
        </div>`

        // document.getElementById("like-btn").addEventListener("click", Beer.handleLike)

    }

    like = (beerCard) => {
        api.likeBeer(this.data.id, this.data.likes + 1).then(beer => {
          this.data = beer
          beerCard.querySelector(".likes-count").innerText = `${this.data.likes} Likes`
        })
      }

    static findBeer = (id) => this.all.find(beer => beer.data.id == id)

    static handleLike = (e) => {
        document.querySelectorAll(".like-button").forEach(function(e){
            e.addEventListener("click", Beer.handleLike)
        })
        if (e.target.classList.contains("like-button")) {
            const beerCard = e.target.closest(".beer-card")
            const id = beerCard.dataset.id
            Beer.findBeer(id).like(beerCard)
        }
    }
    
    get beerContainer() {
        return document.querySelector(".beer-container")
    }


}