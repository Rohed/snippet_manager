import React, { Component } from "react";
import { connect } from "react-redux";
import setAuthToken from "../actions";
// const express = require("express");
// const bodyParser = require("body-parser");
// const axios = require("axios");
// axios.default.post["Content-Type"] = "application/json";
class callbackHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: props.file
    };
  }
  componentDidMount() {
    console.log(this.props.location);
  }
  render() {
    const { id, name } = this.props.location;
    return (
      <div className="sidemarker" onClick={() => this.props.openFile(id)}>
        {name},
        <br />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    openfile: state.file
  };
};
export default connect(
  mapStateToProps,
  null // { openFile }
)(callbackHandle);
