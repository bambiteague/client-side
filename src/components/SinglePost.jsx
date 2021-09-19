import React, { Component } from "react";
import { connect } from "react-redux";

export class SinglePost extends Component {
    render() {
     const post = this.props.match
     
        return (
           
            <article className="post">
                {" "}
                <h2>{post.title}</h2> <p className="post-content">{post.content}</p>{" "}
            </article>
        );
    }
};

// const mapStateToProps = ({ postReducer }) => {
//   return {
//     post: postReducer.post,
//     requesting: postReducer.requesting,
//   };
// };

export default connect( )(SinglePost);
