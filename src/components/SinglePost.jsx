import React, { Component } from "react";
import { fetchSinglePost } from "../actions/fetchSinglePost";
import { connect } from "react-redux";

export class SinglePost extends Component {
  componentDidMount() {
    this.setState({ ...this.state, hasMounted: true });
    return this.props.fetchSinglePost(this.props.match.params.postId);
  }

  constructor() {
    super();
    this.state = { hasMounted: false };
  }

  render() {
    return (
      <div>
        {this.props.requesting || !this.state.hasMounted ? (
          <h1>Loading...</h1>
        ) : (
          <article className="post">
            {" "}
            <h2>{this.props.post.title}</h2>
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

export default connect(mapStateToProps, { fetchSinglePost })(SinglePost);
