import { Component } from "react";
import { connect } from "react-redux";
import { ActionCreators } from "../actions/userActions";

export class UserRegistration extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.getUsername.value;
    const password = this.getPassword.value;
    const data = {
      username,
      password,
    };

    this.props.submitRegistration(data);
    this.getUsername.value = "";
    this.getPassword.value = "";
  };

  render() {
    const { username, password } = this.state.user;
    const { submitted } = this.state;

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
        <button type="button" className="button" onClick={this.submitForm}>
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
  };
};

export default connect(mapStateToProps)(UserRegistration);
