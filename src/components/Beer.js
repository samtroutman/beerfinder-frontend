class Beer {
    
    constructor(data) {
        this.data = data 
    }

    render = () => {
        const {name, brewery, description, ibu, abv, image, likes} = this.data
        document.querySelector(".container").innerHTML +=
        `<div class="beer-card">
        <img src=${image} alt=${name}</img>
        <h1>${name} • ${brewery}</h1>
        <h2>IBU: ${ibu} ABV: ${abv}</h2>
        <p>${description}</p>
        <p>Likes: ${likes}</p>
        <button class="like-btn">Like ${name}</button>
        </div>`
    }

}