import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Editor from "./components/Editor";
import SideBar from "./components/sidebar";
import { fetchToken } from "./actions";
const axios = require("axios");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { code: "" };
  }
  componentDidMount() {
    var location = this.props.location;

    if (location.search) {
      var search = location.search.substr(1);
      console.log("search", search);
      var query = JSON.parse(
        '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        function(key, value) {
          return key === "" ? value : decodeURIComponent(value);
        }
      );
      if (query.code) {
        console.log("query.code", query.code);
      }
      if (query.access_token) {
        console.log("query.access_token", query.access_token);
      }
      //this.setState({ code: query.code });
      //console.log("this.state", this.state);

      this.props.fetchToken(query.code);
    }
  }
  render() {
    return (
      <div className="App">
        <SideBar />
        <Editor />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    code: state.code
  };
};
export default connect(
  mapStateToProps,
  { fetchToken }
)(App);
