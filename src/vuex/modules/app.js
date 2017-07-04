import * as types from '../mutation-types'

const state = {
  isLoading: false,
  items: []
}

const mutations = {
  [types.SET_IS_LOADING](state, isLoading) {
    state.isLoading = isLoading
  },
  [types.SENDITEMS](state, payload) {
    state.items = payload
  }
}

export default {
  state,
  mutations
}