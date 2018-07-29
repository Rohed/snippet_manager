import { SET_USER } from "../constants";
export default (state = "", action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action.user === undefined ? { user: null } : action;
      return user;
    default:
      return state;
  }
};
