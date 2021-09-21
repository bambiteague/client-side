import { Component } from "react";
import { connect } from "react-redux";
import { ActionCreators } from "../actions/userActions";

export class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
      },
      submitted: false,
    };
  }

  submitForm = async (event) => {
    this.setState({ submitted: true });
    this.props.dispatch(ActionCreators.formSubmittionStatus(true));
    const user = this.state.user;

    event.preventDefault();
    if (
      this.validateForm(this.state.errors) &&
      this.props.username &&
      this.props.password
    ) {
      console.info("Valid Form");
      this.props.dispatch(ActionCreators.addProfile(user));
      this.props.history.push("/confirm");
    } else {
      console.log("Invalid Form");
    }
  };
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
  };
};

export default connect(mapStateToProps)(UserRegistration);
