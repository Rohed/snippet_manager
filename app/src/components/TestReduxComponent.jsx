import React, { Component } from 'react';
import { connect } from "react-redux";
import { logUser } from "../actions";
class TestReduxComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      flag: false
    }
  }
  componentWillMount = () => {
    this.props.logUser("Test User");
  };
  render() {
    return (
      <div className="TestReduxComponent">
        Hi From Boilerplate Redux-Thunk
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps, { logUser })(TestReduxComponent);
