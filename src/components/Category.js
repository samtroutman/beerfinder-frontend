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


    static getCategories(){
        api.getCategories().then(categories => {
            categories.forEach(category => Category.addCategory(category))

        })
    }
}