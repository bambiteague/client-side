import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";

export class Posts extends Component {
  componentDidMount() {
      this.props.fetchPosts()
  };
  
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.requesting ? (
          <h1>Loading...</h1>
        ) : (
          this.props.posts.map((post) => (
            <h3>{post.title} - {post.author}</h3>
          ))
        )}
      </div>
    );
  }

}

const mapStateToProps = ({ postReducer }) => {
  return {
    posts: postReducer.posts,
    requesting: postReducer.requesting,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
