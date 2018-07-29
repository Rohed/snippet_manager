import React, { Component } from "react";
import { connect } from "react-redux";
import GistList from "./GistList";
import RefreshButton from "./RefreshButton";
import { setOpen } from "../actions";
import "./sidebar.css";
import "./auth_buttons.css";

class SideBar extends Component {
  constructor(props) {
    super(props);

    // this.state = { isopen: this.props.isopen };
  }

  toggleView() {
    if (this.props.isopen) {
      // this.setState({ isopen: false });
      this.props.setOpen(false);
      console.log("closing");
    } else {
      // this.setState({ isopen: true });
      this.props.setOpen(true);
      console.log("openning");
    }
  }

  render() {
    return (
      <div className={this.props.isopen ? "sidebar open" : "sidebar"}>
        <button
          className="btn btn-primary right"
          type="button"
          onClick={() => this.toggleView()}
        >
          >>
        </button>

        <div className={this.props.isopen ? "content open" : "content"}>
          <a
            className={this.props.needsLogin ? "showlink" : "hidelink"}
            href="https://github.com/login/oauth/authorize?client_id=75fba4d0273d4fe7aec1&scope=user%20repo%20gist"
          >
            <button className="btn-auth large btn-github">
              Sign In To Github
            </button>
          </a>
          <RefreshButton needsLogin={this.props.needsLogin} />
          <div className="form-group">
            <GistList />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { isopen, needsLogin } = state;
  return {
    isopen,
    needsLogin
  };
}

export default connect(
  mapStateToProps,
  { setOpen }
)(SideBar);
