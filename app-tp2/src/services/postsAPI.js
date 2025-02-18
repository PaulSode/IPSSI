const postsAPI = {
    getPosts: () => {
        return fetch("https://www.dnd5eapi.co/api/monsters/").then((response) => response.json())
    },

    getPostById: (id) => {
        return fetch(`https://www.dnd5eapi.co/api/monsters/${id}`).then((response) => response.json())
    }
}

export default postsAPI