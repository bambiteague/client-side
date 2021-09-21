import React, { Component } from "react";
import {
  fetchSinglePost,
  handleDelete,
  handleUpdate,
} from "../actions/SinglePostCrud.js";
import { connect } from "react-redux";

export class SinglePost extends Component {
  componentDidMount() {
    this.setState({ ...this.state, hasMounted: true });
    return this.props.fetchSinglePost(this.props.match.params.postId);
  }

  constructor() {
    super();
    this.state = {
      hasMounted: false,
    };
  }

  render() {
    return (
      <div>
        {this.props.requesting ? (
          <h1>Loading...</h1>
        ) : (
          <article className="post">
            {" "}
            <h2>{this.props.post.title}</h2>{" "}
            <button
              key={this.props.id}
              onClick={(postId) => this.props.handleDelete(this.props.postId)}
            >
              Delete
            </button>
            <button
              key={this.props.id}
              onClick={(postId) => this.props.handleUpdate(this.props.postId)}
            >
              Update
            </button>
            <p className="post-content">{this.props.post.content}</p>{" "}
          </article>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ postReducer }) => {
  return {
    post: postReducer.post,
    requesting: postReducer.requesting,
  };
};

export default connect(mapStateToProps, { 
  fetchSinglePost,
  handleDelete,
  handleUpdate, 
})(SinglePost);
