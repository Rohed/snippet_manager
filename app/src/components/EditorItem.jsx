import React, { Component } from "react";
import { connect } from "react-redux";
import "./editor.css";
//import { fetchContent } from "../actions";
class EditorItem extends Component {
  render() {
    let { content, filename } = this.props.file;
    return (
      <div className="fileWindow">
        <h4>{filename}</h4>
        <div className="maintextbox">
          <textarea defaultValue={content} />
        </div>
        <button>Update</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default EditorItem;
