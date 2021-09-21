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
        <button class="like-button" id="like-btn">Like ${name}</button>
        </div>`

        document.getElementById("like-btn").addEventListener("click", Beer.handleLike)

    }

    static handleLike = (e) => {
        document.querySelectorAll(".like-button").forEach(function(e){
            e.addEventListener("click", Beer.handleLike)
      })
        if (e.target.classList.contains("like-button")) {
            const beerCard = e.target.closest(".beer-card")
            const id = beerCard.dataset.id
            console.log(id)
        }
    }
    
    get beerContainer() {
        return document.querySelector(".beer-container")
    }


}