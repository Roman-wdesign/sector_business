import axios from "axios";

const state = {
    products: []
}

const getters = {
    PRODUCTS(state) {
        return state.products
    },
}

const mutations = {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    }

}

const actions = {
    GET_PRODUCTS_FROM_API({ commit }) {
        const urlMain = "https://jsonplaceholder.typicode.com/posts";
        return axios(urlMain, {
            method: "GET",
            timeout: 1000,
        })
            .then((response) => {
                commit("SET_PRODUCTS_TO_STATE", response.data);
                return response;
            })
            .finally(() =>
                console.log(
                    "%cData products loading is complete on VueX",
                    "background: #0096d3; color: #FFFFFFFF"
                )
            )
            .catch(function (error) {
                console.log(error, 'Wrong data from API');
            });
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}