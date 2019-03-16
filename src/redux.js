// action types
import axios from 'axios';
import {dataMock} from './match/mock';

export const GET_CATS_REQUEST = 'GET_CATS_REQUEST';
export const GET_CATS_SUCCESS = 'GET_CATS_SUCCESS';
export const GET_CATS_FAILURE = 'GET_CATS_FAILURE';
export const UPDATE_RANKING = 'UPDATE_RANKING';

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

export const updateRanking = (id, dispatch) => {
  return dispatch({
    type: UPDATE_RANKING,
    id,
  });
};
