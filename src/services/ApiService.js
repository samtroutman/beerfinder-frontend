class ApiService {
    constructor(api) {
        this.api = api
    }

    getCategories = () => fetch(this.api + "/categories").then(res => res.json())
}