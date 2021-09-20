class Category {

    static all = []

    constructor(data) {
        this.data = data
        this.beers = this.data.beers.map(beer => new Beer(beer))
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const {name, imageUrl} = this.data
        document.getElementById("main").innerHTML = 
        `<div class="show">
            <h1>${name}</h1>
            <img src="${imageUrl}" alt=${name}/>
            </div>
            <div class="beer-container"></div>
            <button id="goBack">Go Back</button>`
        this.beers.forEach(beer => beer.render ())

        // document.getElementById("like-btn").addEventListener("click", () => {
        //     console.log("test")
        // })
        
        document.getElementById("goBack").addEventListener("click", Category.renderIndex)
        
    }

    renderCard = () => {
        const {name, imageUrl, id} = this.data
        document.getElementById("category-container").innerHTML +=
        `<div class="category-card" data-id=${id}>
            <img src=${imageUrl} alt=${name}/>
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
        categoryContainer.addEventListener("click", this.handleIndexClick)
    }
    
    static handleIndexClick = (e) => {
        if (e.target.classList.contains("title")) {
            const id = e.target.closest(".category-card").dataset.id
            this.find(id).renderShow()
        }
     }
    
}