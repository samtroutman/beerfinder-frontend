class Beer {
    
    constructor(data) {
        this.data = data 
    }

    render = () => {
        const {name, brewery, description, ibu, abv, image, likes} = this.data
        document.querySelector(".beer-container").innerHTML +=
        `<div class="beer-card">
        <img src=${image} alt=${name}</img>
        <h1>${name} • ${brewery}</h1>
        <h2>IBU: ${ibu} ABV: ${abv}</h2>
        <p>${description}</p>
        <p>Likes: ${likes}</p>
        <button class="like-btn">Like ${name}</button>
        </div>`        

    }

    get beerContainer() {
        return document.getElementById("beer-container")
    }

    static addEventListeners = () => {
        beerContainer.addEventListener("click", Beer.handleLikeClick)
    }

    static handleLikeClick = (e) => {
        console.log(e.target)
    }

    // like = (card) => {
    //     api.likeBeer(this.data.id, this.data.likes +1).then(beer => {
    //         this.data = beer
    //         card.innerHTML = this.render()
    //     })
    // }



}