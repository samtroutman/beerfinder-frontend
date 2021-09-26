const api = new ApiService("http://localhost:3000")
Category.getCategories()
document.getElementById("home").addEventListener("click", Category.renderIndex)

