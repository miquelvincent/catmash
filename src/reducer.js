import _ from 'lodash';
import {GET_CATS_SUCCESS, UPDATE_RANKING, GET_RANKING_SUCCESS} from './actions';

const buildRanking = (cats, ranking) => {
  const lescats = _.keyBy(cats, 'id');
  return _.forEach(lescats, function(value, key) {
    lescats[key] = {
      ...value,
      scoreRate: 0,
    };
  });

  // const result = [
  //   {
  //     id: String,
  //     url: String,
  //     scoreRate: Number

  //   }
  // ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_CATS_SUCCESS:
      return {
        ...state,
        cats: action.cats,
      };

    case UPDATE_RANKING:
      return {
        ...state,
        cats: _.shuffle(state.cats)
      };

    case GET_RANKING_SUCCESS:
      console.log(action.ranking);
      return {
        ...state,
        cats: _.shuffle(state.cats),
        ranking: state.cats,
      };

    default:
      return state;
  }
};
