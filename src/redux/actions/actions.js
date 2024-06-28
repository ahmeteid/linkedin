import * as actions from "./actionTypes";

export const setUser = (payload) => {
  return {
    type: actions.EST_USER,
    user: payload,
  };
};
