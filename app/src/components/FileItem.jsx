import React, { Component } from "react";
//import { openFile } from "../actions";
import { connect } from "react-redux";
const moment = require("moment");
class FileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: props.file
    };
  }

  render() {
    const { filename, language } = this.props.file;
    return (
      <div>
        {filename},
        <br />
        <em> {language}</em>
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
)(FileItem);
