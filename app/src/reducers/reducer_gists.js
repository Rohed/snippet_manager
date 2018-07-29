import { SET_GIST } from "../constants";
export default (state = [], action) => {
  switch (action.type) {
    case SET_GIST:
      const { gists } = action;
      return gists;
    default:
      return state;
  }
};
