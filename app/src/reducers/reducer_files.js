import { SET_FILE } from "../constants";
export default (state = {}, action) => {
  switch (action.type) {
    case SET_FILE:
      const { files } = action.files ? action : {};
      return files;
    default:
      return state;
  }
};
