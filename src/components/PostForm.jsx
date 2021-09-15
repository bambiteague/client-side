import React, { Component } from "react";

export class PostForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.getTitle.value;
    const content = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      content
    }
    // debugger
    // this.props.dispatch({
    //   type:'ADDING_POSTS',
    //   data});
    // this.getTitle.value = '';
    // this.getMessage.value = '';
  };

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input required type="text" ref={(input)=>this.getTitle = input} placeholder="Enter Post Title" />
          <br />
          <br />
          <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" placeholder="Write Your Post Here" />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
