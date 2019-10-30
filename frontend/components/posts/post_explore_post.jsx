import React, { Component } from 'react'

export class PostExplorePost extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const { post } = this.props;
    return (
      <div>
        <img src={post.photoUrl} />
      </div>
    );
  }
}

export default PostExplorePost
