import React, { Component } from "react";
import { fetchGists } from "../actions";
import { connect } from "react-redux";
import GistItem from "./GistItem";
class GistList extends Component {
  componentDidMount() {
    console.log("here");

    this.props.fetchGists();
  }
  render() {
    console.log("this.props.gists", this.props.gists);

    return (
      <div className="editor">
        {this.props.gists.map((gist, index) => {
          return <GistItem key={index} gist={gist} />;
        })}
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
)(GistList);
