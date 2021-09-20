class Beer {

    static all =[]
    
    constructor(data) {
        this.data = data 
    }

    render = () => {
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

    get beerContainer() {
        return document.querySelector(".beer-container")
    }

    likeBeer = (id, likes) => fetch(`${this.api}/beers/${id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes: likes}),
      })
      .then(res => res.json())
      


}