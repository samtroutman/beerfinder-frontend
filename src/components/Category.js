class Category {

    static all = []

    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
        console.log(this)
    }

    static addCategory(category){
        new Category(category)
    }

    static renderIndex(){
        const categoryContainer = document.createElement("div")
        categoryContainer.classList.add("category-container")
        document.getElementById("main").appendChild(categoryContainer)
    }


    static getCategories(){
        api.getCategories().then(categories => {
            categories.forEach(category => Category.addCategory(category))
            this.renderIndex()
        })
    }
}