import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Like extends Component {
  constructor(props){
    super(props)
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }
  handleLike(e){
    e.preventDefault();
    this.props.createLike({post_id: this.props.post.id})           
  }

  handleUnlike(e){
    e.preventDefault();
    this.props.deleteLike(this.props.post.id)
  }
  render() {
    let {post} = this.props
    let like;
    // debugger
    // debugger
    like =
      this.props.post.likes.filter(
        liker => liker.user_id === this.props.currentUser.id
      ).length === 0 ? (
        <div className="heartDiv">
          <svg
            className="post-show-like"
            onClick={this.handleLike}
            className="heart-empty"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            data-reactid="641"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
      ) : (
        <div className="heartDiv">
          <svg
            className="post-show-like"
            onClick={this.handleUnlike}
            className="heart-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            fill="red"
            stroke="red"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            data-reactid="641"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
      );
    return (
      <div className="heartDiv">
        {like}
      </div>
    );
  }
}

export default Like
