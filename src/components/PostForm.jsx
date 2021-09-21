import React, { Component } from "react";
import { submitPost } from "../actions/submitPost";
import { connect } from "react-redux";

export class PostForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.getTitle.value;
    const content = this.getMessage.value;
    const data = {
      title,
      content,
    };

    this.props.submitPost(data);
    this.getTitle.value = "";
    this.getMessage.value = "";
  };

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={(input) => (this.getTitle = input)}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="10"
            ref={(input) => (this.getMessage = input)}
            cols="28"
            placeholder="Write Your Post Here"
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { submitPost })(PostForm);
