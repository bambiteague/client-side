import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";

export class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(Posts);
