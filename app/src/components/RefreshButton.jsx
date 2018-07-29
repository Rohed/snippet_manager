import React, { Component } from "react";
import { fetchGists } from "../actions";
import { connect } from "react-redux";

class RefreshButton extends Component {
  render() {
    console.log("this.props.files", this.props.files);

    return (
      <div>
        <button
          className={this.props.needsLogin ? "hidelink" : "btn btn-primary"}
          onClick={() => this.props.fetchGists()}
        >
          Refresh
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    gists: state.gists
  };
};

export default connect(
  mapStateToProps,
  { fetchGists }
)(RefreshButton);
