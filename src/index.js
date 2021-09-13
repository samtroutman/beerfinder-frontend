console.log("hello world")

const api = new ApiService("http://localhost:3000")

api.getCategories().then(console.log)

Category.getCategories