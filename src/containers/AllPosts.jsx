import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import Post from '../components/Post.jsx';

export class AllPosts extends Component {
  componentDidMount() {
      this.props.fetchPosts()
  };

  render() {
    return (
        <div>
            <h1>All Posts</h1>
            {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
    );
}
  
  // render() {
  //   return (
  //     <div>
  //       <h1>Posts</h1>
  //       {this.props.requesting ? (
  //         <h1>Loading...</h1>
  //       ) : (
  //         this.props.posts.map((post) => (
  //           <h3>{post.title} - {post.author}</h3>
  //         ))
  //       )}
  //     </div>
  //   );
  // }
}

const mapStateToProps = ({ state }) => {
  return {
    posts: state
    // posts: postReducer.posts,
    // requesting: postReducer.requesting,
  };
};

export default connect(mapStateToProps, { fetchPosts })(AllPosts);
