class Beer {

    static all =[]
    
    constructor(data) {
        this.data = data
        // this.getBeer = new api.getBeers()
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
        document.querySelectorAll(".like-button").forEach(function(e){
            e.addEventListener("click", Beer.handleLike)
        })
    }

    renderRandomBeer = () => {
        const {id, name, brewery, description, ibu, abv, image, likes} = this.data
        document.getElementById("main").innerHTML = 
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
    
    get beerContainer() {
        return document.querySelector(".beer-container")
    }
    
    static findBeer = (id) => this.all.find(beer => beer.data.id == id)
    
    static handleLike = (e) => {
        if (e.target.classList.contains("like-button")) {
            const beerCard = e.target.closest(".beer-card")
            const id = beerCard.dataset.id
            Beer.findBeer(id).like(beerCard)
        }
    }

    static getRandomBeer(){
        api.getBeers().then(beer => new Beer(beer))
            this.renderRandom()
        }

    static renderRandom = () => {
        const main = document.getElementById("main")
        main.innerHTML = ""
        const randomContainer = document.createElement("div")
        randomContainer.id = "beer-container"
        main.appendChild(randomContainer)
        this.all.forEach(beer => beer.renderRandomBeer())
    }
    

}