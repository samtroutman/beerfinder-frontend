class ApiService {
    constructor(api) {
        this.api = api
    }

    getCategories = () => fetch(this.api + "/categories").then(res => res.json())

    likeBeer = (id, likes) => fetch(`${this.api}/beers/${id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes: likes}),
      })
      .then(res => res.json())

}