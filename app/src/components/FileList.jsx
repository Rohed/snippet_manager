import React, { Component } from "react";
import { fetchFiles } from "../actions";
import { connect } from "react-redux";
import FileItem from "./FileItem";
class FileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: props.files
    };
  }
  render() {
    return (
      <div>
        {Object.keys(this.props.files).map((key, index) => {
          return <FileItem key={index} file={this.props.files[key]} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    files: state.files
  };
};

export default FileList;
