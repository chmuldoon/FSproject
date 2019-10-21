import React from 'react';
import { Link } from "react-router-dom";



class PostShow extends React.Component {
  constructor(props) {
    super(props);
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
    let users = Object.values(this.props.users);
    let post = this.props.post;
    return (
      <div className="PostShowBackground">
        {post.author.full_name ? (
          <title>
            {post.author.full_name}
            {` (@${post.author.username}) • Clonestagram Profile`}{" "}
          </title>
        ) : (
          <title>
            {`(@${post.author.username}) • Clonestagram Profile`}{" "}
          </title>
        )}
        <div className="postShowBox">
          <div>
            <img width="600px" height="600px" src={post.photoUrl} />
          </div>
          <div className="postShowInfo">
            <div className="postShowUser">
              <Link className="postUsernames" to={`/users/${post.author.id}`}>
                <div className="pfp">
                  <img src={post.pfp} />
                </div>
                {post.author.username}
              </Link>
            </div>
            <div className="postShowComments">
              <div>
                <Link to={`/users/${post.author.id}`}>
                  <img className="userShowPfp" src={post.pfp} />
                  {post.author.username}
                </Link>
                {post.caption}
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

                return (
                  <div className="postShowcommentCaption">
                    <Link
                      className="extraDetailName"
                      to={`/users/${commentor.id}`}
                    >
                      <img className="userShowPfp" src={userPhotoUrl} />
                      {commentor.username}
                    </Link>
                    <p>{comment.body}</p>
                  </div>
                );
              })}
            </div>
            <div className="postShowLowerSection">
              <div className="Like-Button">
                {post.hasLiked ? (
                  <div className="heartDiv">
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
                  <div className="heartDiv">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostShow