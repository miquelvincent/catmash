// action types
import axios from 'axios';
import {dataMock} from './match/mock';
import {GET_CATS_SUCCESS, UPDATE_RANKING} from './actions'

export const fetchcats = async dispatch => {
  try {
    const data = await axios.get('https://latelier.co/data/cats.json');
    return dispatch({
      type: GET_CATS_SUCCESS,
      cats: data.images,
    });
  } catch (e) {
    return dispatch({
      type: GET_CATS_SUCCESS,
      cats: dataMock.images,
    });

    //!! QUICK FIX
    // return dispatch({
    //   type: GET_CATS_FAILURE,
    //   error,
    // });
  }
};

export const updateRanking = async (id, dispatch) => {
  try {
    await axios.post('http://localhost:5000/api/cats/ranking', {id});
    return dispatch({
      type:UPDATE_RANKING
    });
  } catch (e) {
    return e
  }
};