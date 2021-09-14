class Category {

    static all = []

    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
    }

    renderShow = () => {
        const {name, imageUrl} = this.data
        document.getElementById("main").innerHTML = 
        `<div class="show">
        <h1>${name}</h1>
        <img src="${imageUrl}" alt=${name}/>
        </div>`
    }

    renderCard = () => {
        const {name, imageUrl, id} = this.data
        document.getElementById("category-container").innerHTML +=
        `<div class="category-card" data-id=${id}>
            <img src=${imageUrl} alt=${name}/>
            <p class="title">${name}</p>
        </div>`
    }

    static handleIndexClick = (e) => {
        if (e.target.tagName == "IMG" || e.target.classList.contains("title")) {
            const id = e.target.closest(".category-card").dataset.id
            this.find(id).renderShow()
        }
    }

    static find = (id) => this.all.find(category => category.data.id == id)

    static renderIndex = () => {
        const categoryContainer = document.createElement("div")
        categoryContainer.id = "category-container"
        document.getElementById("main").appendChild(categoryContainer)
        this.all.forEach(category => category.renderCard())
        categoryContainer.addEventListener("click", this.handleIndexClick)
    }


    static getCategories(){
        api.getCategories().then(categories => {
            categories.forEach(category => new Category(category))
            this.renderIndex()
        })
    }
}