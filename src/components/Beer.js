class Beer {
    
    constructor(data) {
        this.data = data 
    }

    render = () => {
        const {name, brewery, description, ibu, abv, image}
        document.querySelector(".container").innerHTML +=
        `<div class="card">
            <h1>${name}</h1>
        </div>`
    }

}