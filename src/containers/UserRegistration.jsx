import React, { Component } from "react";
import { connect } from "react-redux";
import { submitForm } from "../actions/submitRegistration";
import { addUser } from "../actions/submitRegistration";

export class UserRegistration extends Component {
  componentDidMount() {
    this.setState({ ...this.state, hasMounted: true });
    return this.props.addUser();
  }

  constructor() {
    super();
    this.state = {
      user: {
        username: "",
        password: "",
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.getUsername.value;
    const password = this.getPassword.value;
    const data = {
      username,
      password,
    };
    this.props.submitForm(data);  // it's telling me this isn't a function...?
    this.getUsername.value = "";
    this.getPassword.value = "";
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

// const mapDispatchtoProps = (dispatch) =>

export default connect(mapStateToProps, { addUser })(UserRegistration);
