import React, { Component } from "react";
import { connect } from 'react-redux'

export class Posts extends Component {

   componentDidMount() {

   }
  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    );
  }
}

export default connect()(Posts);
