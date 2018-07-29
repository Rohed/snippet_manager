const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
axios.default.post["Content-Type"] = "application/json";
const PORT = normalizePort(process.env.PORT || "4000");

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    limit: "50mb"
  })
);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/callback", async (req, res) => {
  var code = req.query.code;
  console.log("code", code);
  var access_token = req.query.access_token;
  console.log("access_token", access_token);
  if (code != null) {
    console.log("incode");
    axios
      .post("https://github.com/login/oauth/access_token", {
        client_id: "75fba4d0273d4fe7aec1",
        client_secret: "3468cc84e28db980ea23a2b4f21419a3ac451d33",
        code: code,
        redirect_uri: "http://localhost:3000/callback"
      })
      .then(function(response) {
        console.log("response", response.data);
        var search = response.data;
        var query = JSON.parse(
          '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
          function(key, value) {
            return key === "" ? value : decodeURIComponent(value);
          }
        );
        console.log("query", query);
        axios
          .get("https://api.github.com/user?access_token=" + query.access_token)
          .then(function(response) {
            var user = response.data.login;
            res.send({ access_token: query.access_token, user });
          })
          .catch(function(error) {
            console.log("error", error);
            res.send(error);
          });
      })
      .catch(function(error) {
        console.log("error", error);
        res.send(error);
      });
  } else {
    console.log("outcode");
    res.send({ access_token: access_token });
  }
  //  res.send("callbacked");
});

app.get("/getgists", async (req, res) => {
  var access_token = req.query.access_token;
  if (access_token == "") {
    res.send([]);
  }
  var user = req.query.user;

  axios
    .get(
      "https://api.github.com/users/" +
        user +
        "/gists?access_token=" +
        access_token
    )
    .then(function(response) {
      res.send(response.data);
    })
    .catch(function(error) {
      console.log("error", error);
      res.send(error);
    });
});

app.get("/getfiles", async (req, res) => {
  var access_token = req.query.access_token;

  if (access_token == "") {
    res.send([]);
  }
  var user = req.query.user;
  var gistid = req.query.gistid;

  axios
    .get(
      "https://api.github.com/gists/" + gistid + "?access_token=" + access_token
    )
    .then(function(response) {
      res.send({ files: response.data.files });
    })
    .catch(function(error) {
      console.log("error", error);
      res.send(error);
    });
});
//require("./routes/api")(app, db);
// require("./routes/testapp")(app, testroutes);
// require("./routes/manapp")(app, manroutes);
app.listen(PORT, () => {
  console.log(`now listening for requests on port ${PORT}`);
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
