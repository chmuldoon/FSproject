import React from "react";

import React, { Component } from 'react'

export class PostExplore extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default PostExplore
