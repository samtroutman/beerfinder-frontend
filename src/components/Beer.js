class Beer {

    static all =[]
    
    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
    }

    renderBeer = () => {
        const {id, name, brewery, description, ibu, abv, image, likes} = this.data
        this.beerContainer.innerHTML +=
        `<div class="beer-card" data-id=${id}>
            <img src=${image} alt=${name}</img>
            <h1>${name}</h1>
            <h2>${brewery}</h2>
            <h3>IBU: ${ibu} ABV: ${abv}</h3>
            <p>${description}</p>
            <div class="likes">
                <span class="likes-count">${likes} Likes</span>
            </div>
        <button class="like-button" id="like-btn">Like ${name}</button>
        </div>`
        document.getElementById("like-btn").addEventListener("click", Beer.handleLike)
    }

    like = (beerCard) => {
        api.likeBeer(this.data.id, this.data.likes + 1).then(beer => {
          this.data = beer
          beerCard.querySelector(".likes-count").innerText = `${this.data.likes} Likes`
        })
      }

    static findBeer = (id) => this.all.find(beer => beer.data.id == id)

    static getRandomBeer(){
        api.getBeers().then(beers => {
            beers.forEach(beer => new Beer(beer))
            const randomBeer = beers[Math.floor(Math.random() * beers.length)]
        console.log(randomBeer)
            // this.renderRandom()
        })
        // const randomBeer = beers[Math.floor(Math.random() * beers.length)]
        // console.log(randomBeer)

    }

    // static renderRandom() {
    //     const randomBeer = beers[Math.floor(Math.random() * beers.length)]
    //     console.log(randomBeer)
    // }

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