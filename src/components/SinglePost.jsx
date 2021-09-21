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

  handleDelete = () => {}

  handleUpdate = () => {}

  render() {
    return (
      <div>
        {this.props.requesting || !this.state.hasMounted ? (
          <h1>Loading...</h1>
        ) : (
          <article className="post">
            {" "}
            <h2>{this.props.post.title}</h2>
            {/* putting buttons here to DELETE or UPDATE post Content */}     <button className="delete-button" onClick{this.deletePost} => ></article> >Delete</button> 
            <button className="update-button">Update</button>
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
