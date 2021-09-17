import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/fetchPosts";

export class AllPosts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  // ^ I think this needs modifying

  // <li key={astro.id}>{astro.name}</li>


  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.requesting ? (
          <h1>Loading...</h1>
        ) : (
          this.props.posts.map((post) => (
            <li key={post.id}>{post.title} - {post.author}</li>
          ))
        )}
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return { fetchPosts: () => dispatch(fetchPosts()) };
}

const mapStateToProps = ({ postReducer }) => {
  return {
    posts: postReducer.posts,
    requesting: postReducer.requesting,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
