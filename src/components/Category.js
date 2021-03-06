class Category {

    static all = []

    constructor(data) {
        this.data = data
        this.beers = this.data.beers.map(beer => new Beer(beer))
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const {name} = this.data
        document.getElementById("main").innerHTML = 
        `<div class="show">
            <h1>${name}s</h1>
            </div>
            <div class="beer-container"></div>`
        this.beers.forEach(beer => beer.renderBeer ())
    }

    renderCard = () => {
        const {name, imageUrl, id} = this.data
        document.getElementById("category-container").innerHTML +=
        `<div class="category-card" data-id=${id}>
            <img class = "category-img" src=${imageUrl} alt=${name}/>
            <p class="title">${name}</p>
        </div>`
    }

    
    static find = (id) => this.all.find(category => category.data.id == id)
    
    static getCategories(){
        api.getCategories().then(categories => {
            categories.forEach(category => new Category(category))
            this.renderIndex()
        })
    }
    
    static renderIndex = () => {
        const main = document.getElementById("main")
        main.innerHTML = ""
        const categoryContainer = document.createElement("div")
        categoryContainer.id = "category-container"
        main.appendChild(categoryContainer)
        this.all.forEach(category => category.renderCard())
        document.addEventListener("click", this.handleIndexClick)
    }
    
    static handleIndexClick = (e) => {
        e.stopPropagation();
        if (e.target.classList.contains("title") || e.target.classList.contains("category-img") ) {
            const id = e.target.closest(".category-card").dataset.id
            this.find(id).renderShow() }
        else if (e.target.classList.contains("random-button")) {
            Beer.getRandomBeer()
        }
    }
}