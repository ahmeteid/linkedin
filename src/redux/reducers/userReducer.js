import * as actions from "../actions/actionTypes";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.EST_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
