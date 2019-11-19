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
        <Link className="Explore-Post-Link" to={`/posts/${post.id}`}>
          <div
            className="Overlay"
            id="profile"
            onClick={() => this.props.openShowModal("postShow", post)}
          >
            <p style={{ zIndex: 8 }}>
              {post.likeCount} <i className="fas fa-heart" />
              {post.comments.length}
              {"  "} <i className="fas fa-comment"></i>
            </p>
          </div>
          <img
            onClick={() => this.props.openShowModal("postShow", post)}
            width="275px"
            height="275px"
            src={post.photoUrl}
          />
          {/* <img src={post.photoUrl} /> */}
        </Link>
      </div>
    );
  }
}

export default PostExplorePost
