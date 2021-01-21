import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import axios from "axios";

Vue.use(Vuex);

// VuexPersist stuff
const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage,
});

export const store = new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    playerStats: [],
  },
  getters: {
    getPlayerStats: (state) => {
      return state.playerStats;
    },
  },
  mutations: {
    setPlayers(state, stats) {
      state.playerStats = stats;
    },
  },
  actions: {
    // fetchPlayer({ commit, state }, data) {
    //   let firstName = data.formValues.firstName.replace(/\s/g, "").toLowerCase();
    //   let lastName = data.formValues.lastName.replace(/\s/g, "").toLowerCase();

    //   axios.get(`http://localhost:5000/${data.player}/player`,
    //   {
    //     params: {
    //       first: firstName.charAt(0).toUpperCase() + firstName.slice(1),
    //       last: lastName.charAt(0).toUpperCase() + lastName.slice(1),
    //     },
    //   }).then(response => {
    //       commit('setPlayers', response.data);
    //       console.log(state.playerStats);
    //       data.router.push({ path: `${data.player}/player`, query: { first: firstName, last: lastName}});
    //   }).catch((error) => {
    //       console.log(error);
    //   })
    // }
    fetchPlayer({ commit }, data) {
      return new Promise((resolve) => {
        let firstName = data.formValues.firstName
          .replace(/\s/g, "")
          .toLowerCase();
        let lastName = data.formValues.lastName
          .replace(/\s/g, "")
          .toLowerCase();

        axios
          .get(`http://localhost:5000/${data.player}/player`, {
            params: {
              first: firstName.charAt(0).toUpperCase() + firstName.slice(1),
              last: lastName.charAt(0).toUpperCase() + lastName.slice(1),
            },
          })
          .then((response) => {
            commit("setPlayers", response.data);
          })
          .catch((error) => {
            console.log(error);
          });

        resolve({ firstName, lastName });
      });
    },
  },
});
