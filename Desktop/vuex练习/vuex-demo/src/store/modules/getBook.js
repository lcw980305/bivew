import axios from 'axios'
export default {
    namespaced: true,
    state: {
        books: [],
    },
    mutations: {
        setBooks(state, newBooks) {
            state.books = newBooks
        }
    },
    actions: {
        async AgetBooks({ commit }) {
            const res = await axios({
                url: 'https://www.fastmock.site/mock/37d3b9f13a48d528a9339fbed1b81bd5/book/api/books'
            })
            commit('setBooks', res.data.data)
        }
    },
    getters: {},
}