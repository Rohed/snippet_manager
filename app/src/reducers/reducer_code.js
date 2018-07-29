import { SET_CODE } from "../constants";
export default (state = "", action) => {
  switch (action.type) {
    case SET_CODE:
      const { code } = action;
      return code;
    default:
      return state;
  }
};
