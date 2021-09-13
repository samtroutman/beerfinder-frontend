class Category {

    static all = []

    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
        console.log(this)
    }

    renderCard = () => {
        const {name, imageUrl, id} = this.data
        document.getElementById("category-container").innerHTML +=
        `<div class="category-card">
            <img src=${imageUrl} alt=${name}/>
            <p class="title">${name}</p>
        </div>`
    }

    static handleIndexClick = (e) => {
        console.log(e.target)
    }

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