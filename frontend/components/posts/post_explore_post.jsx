import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class PostExplorePost extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const { post } = this.props;
    return (
      <div className="Explore-Post">
        <Link className="Explore-Post-Link">
          <img src={post.photoUrl} />
        </Link>
      </div>
    );
  }
}

export default PostExplorePost
