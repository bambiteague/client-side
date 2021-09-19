import React, { Component } from "react";
import PostSubmitButton from "./PostSubmitButton";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        title: "",
        content: "",
      },
    };
  }

  submitForm = e => {
    e.preventDefault();
    // dispatch FORM_SUBMIT action
  };

  handleInputChange = e =>
    this.setState(
      {
        values: { ...this.state.values, [e.target.name]: e.target.value }
      },
      () => {
      // dispatch SET_FORM_VALUES action
      }
    );

  render() {
    return (
      <div>
        <form onSubmit={this.postForm}>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              type="string"
              name="title"
              id="title"
              value={this.state.values.title}
              onChange={this.handleInputChange}
              title="Title"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="content">Post Content</label>
            <input
              type="text"
              name="content"
              id="content"
              value={this.state.values.content}
              onChange={this.handleInputChange}
              title="password"
              required
            />
          </div>
          <PostSubmitButton/>
        </form>
      </div>
    );
  }

}

export default PostForm;

// handleSubmit = (event) => {
//     event.preventDefault();
//     const title = this.getTitle.value;
//     const content = this.getMessage.value;
//     const data = {
//       id: new Date(),
//       title,
//       content,
//     };
//     debugger
//     this.props.dispatch({
//       type: "ADDING_POSTS",
//       data,
//     });
//     this.getTitle.value = "";
//     this.getMessage.value = "";
//   };

//   render() {
//     return (
//       <div>
//         <h1>Create Post</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             required
//             type="text"
//             ref={(input) => (this.getTitle = input)}
//             placeholder="Enter Post Title"
//           />
//           <br />
//           <br />
//           <textarea
//             required
//             rows="5"
//             ref={(input) => (this.getMessage = input)}
//             cols="28"
//             placeholder="Write Your Post Here"
//           />
//           <br />
//           <br />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }


