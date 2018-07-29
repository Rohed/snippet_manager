import React, { Component } from "react";
import { Link } from "react-router-dom";

import { firebaseApp } from "../firebase";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  signUp() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log("error", error);
        this.setState({ error: error });
      });
  }
  render() {
    return (
      <div className="form-inline" style={{ margin: "5%" }}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            style={{ margin: "5px" }}
            type="text"
            placeholder="email"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            className="form-control"
            style={{ margin: "5px" }}
            type="password"
            placeholder="password"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <button
            className="btn btn-primary"
            type="button"
            style={{ margin: "5px" }}
            onClick={() => this.signUp()}
          >
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div>
          <Link to={"/signin"}>
            Already have an account? <span> Sign In here.</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
