import _ from 'lodash'
import { GET_CATS_SUCCESS, UPDATE_RANKING, GET_RANKING_SUCCESS } from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_CATS_SUCCESS:
      return {
        ...state,
        cats: action.cats,
        ranking: []
      }

    case UPDATE_RANKING:
      return {
        ...state,
        cats: _.shuffle(state.cats),
        ranking: []
      }

    case GET_RANKING_SUCCESS:
      return {
        ...state,
        ranking: action.ranking
      }

    default:
      return state
  }
}
