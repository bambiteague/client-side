  export const addUser = (user) => ({ type: "ADD_USER", payload: user });

  export const submitForm = (user) => {
    return (dispatch) => {
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
        },
        body: JSON.stringify(user),
      };
      fetch("http://localhost:3001/users", configObj)
        .then((response) => response.json())
        .then((json) => {
          dispatch(addUser(json));
        });
    };
  };


  // this.setState({ submitted: true });
  // this.props.dispatch(ActionCreators.formSubmittionStatus(true));

  // const user = this.state.user;

  // if (this.props.profile) {
  //   console.info("Valid Form");
  //   this.props.dispatch(ActionCreators.addProfile(user));
  //   this.props.history.push("/confirm");
  // } else {
  //   console.log("Invalid Form");
  // }



