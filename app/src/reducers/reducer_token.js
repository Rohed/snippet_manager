import { SET_TOKEN } from "../constants";
export default (state = "", action) => {
  switch (action.type) {
    case SET_TOKEN:
      const { token } = action;
      return token;
    default:
      return state;
  }
};
