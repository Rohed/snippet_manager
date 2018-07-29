import { SET_NEEDSLOGIN } from "../constants";
export default (state = "", action) => {
  switch (action.type) {
    case SET_NEEDSLOGIN:
      const { needsLogin } = action;
      return needsLogin;
    default:
      return state;
  }
};
