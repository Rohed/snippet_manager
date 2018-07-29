import React, { Component } from "react";
import { connect } from "react-redux";
import "./editor.css";
import EditorItem from "./EditorItem";

class Editor extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     files: props.files === undefined ? {} : props.files
  //   };
  // }
  render() {
    let files = {};
    if (this.props != undefined) {
      if (this.props.files) {
        console.log("this.props editor", this.props);
        files = this.props.files;
      }
    }

    let keys = Object.keys(files);
    console.log("keys", keys);
    return (
      <div className="editoritems">
        {keys.length > 0
          ? keys.map((key, index) => {
              return <EditorItem key={index} file={files[key]} />;
            })
          : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    files: state.files
  };
};

export default connect(
  mapStateToProps,
  null
)(Editor);
