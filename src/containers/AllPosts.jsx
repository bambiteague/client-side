import React, { Component } from "react";
import { Link } from "react-router-dom";
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
              <p key={post.id}>
                  <span>
                    <Link to={`/posts/${post.id}`}>{post.title}<br/></Link>
                  </span>
                 by: {post.author.name}
              </p>
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

export default connect(mapStateToProps, { fetchPosts })(AllPosts);
