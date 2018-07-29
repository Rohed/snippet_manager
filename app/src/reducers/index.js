import { combineReducers } from "redux";
import files from "./reducer_files";
import gists from "./reducer_gists";
import token from "./reducer_token";
import user from "./reducer_user";
import code from "./reducer_code";
import isopen from "./reducer_isopen";
import needsLogin from "./reducer_needsLogin";
export default combineReducers({
  files,
  gists,
  token,
  user,
  code,
  isopen,
  needsLogin
});
