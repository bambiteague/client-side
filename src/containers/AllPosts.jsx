import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/fetchPosts";

export class AllPosts extends Component {
  componentDidMount() {
    return this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.requesting ? (
          <h1>Loading...</h1>   
        ) : (
          this.props.posts.map((post) => (
            <ul>
            <li key={post.id}> <h3>{post.title}</h3><br/>by: {post.author.name}</li>
            </ul>   
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

export default connect(mapStateToProps, {fetchPosts})(AllPosts);
