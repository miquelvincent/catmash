import axios from 'axios'
import _ from 'lodash'
import { dataMock } from './mash/mock'
import { GET_CATS_SUCCESS, UPDATE_RANKING, GET_RANKING_SUCCESS } from './actions'

const urlApi = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : window.location.href

export const buildRanking = (cats, ranking) => {
  let catsByKey = _.keyBy(cats, 'id')
  let rankingByKey = _.keyBy(ranking, 'id')
  const result = _.forEach(catsByKey, (value, key) => {
    catsByKey[key] = rankingByKey[key]
      ? {
          ...value,
          ...rankingByKey[key]
        }
      : {
          ...value,
          scoreRate: 0
        }
  })
  return _.orderBy(result, ['scoreRate'], ['desc'])
}

export const fetchcats = async dispatch => {
  try {
    const data = await axios.get('https://latelier.co/data/cats.json')
    return dispatch({
      type: GET_CATS_SUCCESS,
      cats: data.images
    })
  } catch (e) {
    return dispatch({
      type: GET_CATS_SUCCESS,
      cats: dataMock.images
    })

    //!! QUICK FIX
    // return dispatch({
    //   type: GET_CATS_FAILURE,
    //   error,
    // });
  }
}

export const updateRanking = async (id, dispatch) => {
  try {
    await axios.post(`${urlApi}api/cats/ranking`, { id })
    return dispatch({
      type: UPDATE_RANKING
    })
  } catch (e) {
    return e
  }
}

export const fetchRanking = async (dispatch, state) => {
  try {
    let { data } = await axios.get(`${urlApi}api/cats/ranking`)
    const cats = state.cats.length === 0 ? dataMock.images : state.cats
    data = buildRanking(cats, data)
    return dispatch({
      type: GET_RANKING_SUCCESS,
      ranking: data
    })
  } catch (e) {
    return e
  }
}
