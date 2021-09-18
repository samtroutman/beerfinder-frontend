class Beer {
    
    constructor(data) {
        this.data = data 
    }

    render = () => {
        const {name, brewery, description, ibu, abv, image} = this.data
        document.querySelector(".container").innerHTML +=
        `<div class="card">
            <h1>${name} • ${brewery}</h1>
            <img src=${image} alt=${name}</img>

        </div>`
    }

}