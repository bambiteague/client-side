import { connect } from "react-redux";

class SubmitPost extends Component {
  submitPost = e => {
    e.preventDefault();
    this.props.dispatch({
      type: "SUBMIT_POST"
    });
  };

  handleInputChange = e =>
    this.setState(
      {
        values: { ...this.state.values, [e.target.name]: e.target.value }
      },
      () =>
        this.props.dispatch({
          type: "SET_FORM_VALUES",
          payload: this.state.values
        })
    );

  render() {
      debugger
    return (
      console.log(state)
    );
  }
}

export default connect(null)(SubmitPost);