submitForm = async () => {
  this.setState({ submitted: true });
  this.props.dispatch(ActionCreators.formSubmittionStatus(true));

  const user = this.state.user;

  if (this.props.profile) {
    console.info("Valid Form");
    this.props.dispatch(ActionCreators.addProfile(user));
    this.props.history.push("/confirm");
  } else {
    console.log("Invalid Form");
  }
};
