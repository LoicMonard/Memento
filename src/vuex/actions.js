import * as types from './mutation-types'

export const sendItems = ({commit}, payload) => {
  commit(types.SENDITEMS, payload)
}