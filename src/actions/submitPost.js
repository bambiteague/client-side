export const addPost = (post) => ({ type: "SUBMIT_POST", payload: post });

export const submitPost = (post) => {
  return (dispatch) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(post),
    };
    fetch("http://localhost:3001/posts", configObj)
      .then((response) => response.json())
      .then((json) => {
        dispatch(addPost(json));
      });
  };
};

// import { connect } from "react-redux";

// class SubmitPost extends Component {
//   submitPost = e => {
//     e.preventDefault();
//     this.props.dispatch({
//       type: "SUBMIT_POST"
//     });
//   };

//   handleInputChange = e =>
//     this.setState(
//       {
//         values: { ...this.state.values,
//         [e.target.name]: e.target.value }
//       },
//       () =>
//         this.props.dispatch({
//           type: "SET_FORM_VALUES",
//           payload: this.state.values
//         })
//     );

//   render() {
//     return (
//       console.log(state)
//     );
//   }
// }

// export default connect(null)(SubmitPost);
