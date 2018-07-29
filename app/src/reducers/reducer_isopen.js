import { SET_OPEN } from "../constants";
export default (state = "", action) => {
  switch (action.type) {
    case SET_OPEN:
      const { isopen } = action;
      return isopen;
    default:
      return state;
  }
};
