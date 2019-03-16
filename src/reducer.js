import _ from 'lodash';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CATS_SUCCESS':
      console.log(action.cats);
      return {
        ...state,
        cats: action.cats,
      };

    case 'UPDATE_RANKING':
    console.log(action.id)
      return {
        ...state,
        cats: _.shuffle(state.cats),
      };
    default:
      return state;
  }
}