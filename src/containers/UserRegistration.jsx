import React, { Component } from "react";
import { connect } from "react-redux";
import { submitForm } from "../actions/submitRegistration";

export class UserRegistration extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: "",
        password: "",
      },
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, hasMounted: true });
    return this.props.submitForm(); // it's telling me that submitForm isn't a function??
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitForm(this.state); // it's telling me that submitForm isn't a function??
  };

  render() {
    // debugger
    const { username, password } = this.state.user;
    const { submitted } = this.state; // gotta throw a debugger in here to find out why this.state = nulll at this point in the code. Use your other submission form as a guide!
    return (
      <form className="registration-form">
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => {
            this.handleSubmit(e);
          }}
          className="form-control"
          placeholder="Username"
        />
        <span>{submitted && this.state.user.username.length > 0}</span>
        <br />
        <input
          type="text"
          value={password}
          name="password"
          onChange={(e) => {
            this.handleSubmit(e);
          }}
          className="form-control"
          placeholder="Password"
        />
        <span>{submitted}</span>
        <br />
        <button type="button" className="button" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (userReducer) => {
  return {
    profile: userReducer.profile,
  };
};

// const mapDispatchtoProps = (dispatch) => {}

export default connect(mapStateToProps, { submitForm })(UserRegistration);
