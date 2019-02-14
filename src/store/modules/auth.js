const state = {
  token: null,
};

const getters = {
  isLoggedIn: state => !!state.token,
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
  }
};
//use "commit" to call the mutations. DO nOT call mutations directly

const mutations = {
  setToken: (state, token) => state.token = token,
};

