import {
  SET_FILE,
  SET_GIST,
  SET_OPEN,
  SET_NEEDSLOGIN,
  SET_TOKEN,
  SET_USER,
  SET_CODE
} from "../constants";
import axios from "axios";
const serverURL = "http://localhost:4000/";
export function setFiles(files) {
  return (dispatch, getState) => {
    dispatch(setFilesAction(files));
  };
}

function setFilesAction(files) {
  const action = {
    type: SET_FILE,
    files
  };
  return action;
}
export function setGists(gists) {
  return (dispatch, getState) => {
    dispatch(setGistsAction(gists));
  };
}

function setGistsAction(gists) {
  const action = {
    type: SET_GIST,
    gists
  };
  return action;
}

export function setUser(user) {
  return (dispatch, getState) => {
    dispatch(setUserAction(user));
  };
}

function setUserAction(user) {
  const action = {
    type: SET_USER,
    user
  };
  return action;
}

export function openGist(id) {
  return (dispatch, getState) => {
    var state = getState();
    console.log("state", state);
    if (state.token != "") {
      console.log("gettingFiles");
      axios
        .get(
          serverURL +
            "getfiles?access_token=" +
            state.token +
            "&user=" +
            state.user +
            "&gistid=" +
            id
        )
        .then(function(response) {
          console.log("response files", response.data);

          dispatch(setFilesAction(response.data.files));
        })
        .catch(function(json) {
          console.log("json", json);
        });
    }
  };
}
export function fetchGists() {
  return (dispatch, getState) => {
    var state = getState();

    if (state.token != "") {
      axios
        .get(
          serverURL +
            "getgists?access_token=" +
            state.token +
            "&user=" +
            state.user
        )
        .then(function(response) {
          let gists = response.data;

          dispatch(setGistsAction(gists));
        })
        .catch(function(error) {
          console.log("error", error);
        });
    } else {
      dispatch(setneedsLoginAction(true));
      dispatch(setOpenAction(true));
      dispatch(setGistsAction([]));
    }
  };
}
export function fetchToken(code) {
  console.log("fetchToken");
  return (dispatch, getState) => {
    axios
      .get(serverURL + "callback?code=" + code)
      .then(function(response) {
        dispatch(setTokenAction(response.data.access_token));
        dispatch(setUserAction(response.data.user));
        if (response.data.access_token) {
          dispatch(setneedsLoginAction(false));
        } else {
          dispatch(setneedsLoginAction(true));
        }
        axios
          .get(
            serverURL +
              "getgists?access_token=" +
              response.data.access_token +
              "&user=" +
              response.data.user
          )
          .then(function(response) {
            let gists = response.data;

            dispatch(setGistsAction(gists));
            dispatch(setOpenAction(true));

            //dispatch(setTokenAction(response.data.access_token));
          })
          .catch(function(error) {
            dispatch(setneedsLoginAction(true));
            console.log("error", error);
          });
      })
      .catch(function(error) {
        dispatch(setneedsLoginAction(true));
        console.log("error", error);
      });
  };
}
function setTokenAction(token) {
  const action = {
    type: SET_TOKEN,
    token
  };
  return action;
}
export function setCode(code) {
  return (dispatch, getState) => {
    dispatch(setCodeAction(code));
  };
}
function setCodeAction(code) {
  const action = {
    type: SET_CODE,
    code
  };
  return action;
}

export function setOpen(isopen) {
  return (dispatch, getState) => {
    dispatch(setOpenAction(isopen));
  };
}

function setOpenAction(isopen) {
  const action = {
    type: SET_OPEN,
    isopen
  };
  return action;
}
export function setneedsLogin(needsLogin) {
  return (dispatch, getState) => {
    dispatch(setneedsLoginAction(needsLogin));
  };
}

function setneedsLoginAction(needsLogin) {
  const action = {
    type: SET_NEEDSLOGIN,
    needsLogin
  };
  return action;
}
