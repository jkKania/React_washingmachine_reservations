import * as types from "./../actions/actionTypes";

const initialState = [];

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_USER:
      const { user } = action;
      return [...state, user];

    case types.CLEAR_USERS:
      return initialState;

    case types.DELETE_USER:
      var index = action.id;
      if (index > -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }

    default:
      return state;
  }
}
