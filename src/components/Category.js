class Category {

    static all = []

    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
        console.log(this)
    }

    renderCard = () => {
        const {name, imageURL} = this.data
        document.querySelector(".category-container").innerHTML +=
        `<div class="category-card">
            <img src=${imageURL} alt=${name}/>
            <p>${name}</p>
        </div>`
    }

    static renderIndex(){
        const categoryContainer = document.createElement("div")
        categoryContainer.classList.add("category-container")
        document.getElementById("main").appendChild(categoryContainer)
        this.all.forEach(category => category.renderCard())
    }


    static getCategories(){
        api.getCategories().then(categories => {
            categories.forEach(category => new Category(category))
            this.renderIndex()
        })
    }
}