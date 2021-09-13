class Category {

    static all = []

    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
        console.log(this)
    }

    static renderCategoryIndex() {
        const categoryContainr = document.createElement("div")
        document.getElementById("main").appendChild(categoryContainer)
    }

    static getCategories() {
        api.getCategories().then(categories => {
            categories.forEach(category => Category.addCategory(category))
        })
    }
}