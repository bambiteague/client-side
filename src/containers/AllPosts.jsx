import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/fetchPosts";

export class AllPosts extends Component {
  componentDidMount() {
   this.setState({...this.state, hasMounted: true})
   return this.props.fetchPosts();
  }

  constructor() {
    super()
    this.state = {hasMounted: false}
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.requesting || !this.state.hasMounted ? (
          <h1>Loading...</h1>
        ) : (
          this.props.posts.map((post) => (
              <p key={post.id}>
                  <span>
                    <Link to={`/posts/${post.id}`}>{post.title}<br/></Link>
                  </span>
                 {/* by: {post.user.name}   */}
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
