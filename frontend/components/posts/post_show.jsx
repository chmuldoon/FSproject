import React from 'react';
import { Link } from "react-router-dom";
import CommentContainer from "../comments/comment_container";




class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
  }
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
    // this.props.fetchUsers();
  }
  
  handleLike(e) {
    // e.preventDefault();
    if (this.props.post.hasLiked) {
      this.props.deleteLike(this.props.post.id);
    } else {
      this.props.createLike(this.props.post.id);
    }
  }

  render() {
    if (!this.props.post) {
      return null;
    }

    // let comments =
    let currentUser = this.props.currentUser;
    let users = Object.values(this.props.users);
    let post = this.props.post;
    const sessionId = currentUser.id

    return (
      <div className="PostShowBackground">
        {post.author.full_name ? (
          <title>
            {post.author.full_name}
            {` (@${post.author.username}) • Clonestagram Profile`}{" "}
          </title>
        ) : (
          <title>{`(@${post.author.username}) • Clonestagram Profile`} </title>
        )}
        <div className="postShowBox">
          <div>
            <img width="600px" height="600px" src={post.photoUrl} />
          </div>
          <div className="postShowInfo">
            <div className="postShowUser">
              <Link className="postUsernames" to={`/users/${post.author.id}`}>
                <div className="postShowPfpUsername">
                  <img src={post.pfp} />
                  <p>{post.author.username}</p>
                </div>
              </Link>
            </div>
            <div className="postShowComments">
              <div className="postShowComment">
                <Link to={`/users/${post.author.id}`}>
                  <img className="userShowPfp" src={post.pfp} />
                </Link>
                <div className="commentUsernameAndComment">
                  <Link
                    className="commentUsername"
                    to={`/users/${post.author.id}`}
                  >
                    <p>{post.author.username}</p>
                  </Link>
                  <p>{post.caption}</p>
                </div>
              </div>
              {post.comments.map(comment => {
                let userPhotoUrl;
                let user = users.find(user => user.id == comment.author_id);
                if (user) {
                  userPhotoUrl = user.photoUrl;
                }
                
                let commentor = post.commentors.find(
                  obj => obj.id == comment.author_id
                );
              //  debugger
                return (
                  <div className="postShowComment">
                    <Link to={`/users/${commentor.id}`}>
                      <img className="userShowPfp" src={userPhotoUrl} />
                    </Link>
                    <div className="commentUsernameAndComment">
                      <Link
                        className="commentUsername"
                        to={`/users/${commentor.id}`}
                      >
                        <p>{commentor.username}</p>
                      </Link>
                      <p>{comment.body}</p>
                      {commentor.id === sessionId || post.author.id === sessionId ? (
                        <div>
                          <button>delete</button>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="postShowLowerSection">
              <div className="Post-Like-Button">
                {post.hasLiked ? (
                  <div className="PostHeartDiv">
                    <svg
                      className="post-show-like"
                      onClick={this.handleLike.bind(this)}
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
                ) : (
                  <div className="PostHeartDiv">
                    <svg
                      className="post-show-like"
                      onClick={this.handleLike.bind(this)}
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
                )}
              </div>
              <p>
                {post.likeCount === 0
                  ? "No one likes this yet"
                  : post.likeCount === 1
                  ? "1 person likes this"
                  : `${post.likeCount} people like this`}
              </p>
              <p>date holder</p>
              <div className="PostShowAddComment">
                <CommentContainer postId={post.id} post={post} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostShow