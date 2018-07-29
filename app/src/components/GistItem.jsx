import React, { Component } from "react";
import { openGist } from "../actions";
import { connect } from "react-redux";
import FileList from "./FileList";
const moment = require("moment");
class GistItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gist: props.gist
    };
  }

  render() {
    const { id, files, description, updated_at } = this.props.gist;
    return (
      <div className="sidemarker" onClick={() => this.props.openGist(id)}>
        {description},
        <br />
        <em> {moment(updated_at).format("LLL")}</em>
        <div className="sidemarker small">
          <FileList key={id} files={files} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    opengist: state.gist
  };
};
export default connect(
  mapStateToProps,
  { openGist }
)(GistItem);
