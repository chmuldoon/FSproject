import React from 'react';
import { Link } from "react-router-dom";
import CommentContainer from "../comments/comment_container";
import LikeContainer from "../likes/like_container";




class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.currentUser = this.props.currentUser;
  }
  
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
    this.props.fetchAllComments();
    // this.props.fetchUsers();
  }

  // handleLike(e) {
  //   // e.preventDefault();
  //   if (this.props.post.hasLiked) {
  //     this.props.deleteLike(this.props.post.id);
  //   } else {
  //     this.props.createLike(this.props.post.id);
  //   }
  // }
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
      // this.fetchPost(this.props.post.id)
    };
  }

  render() {
    if (!this.props.post) {
      return null;
    }

    // let comments =
    let {currentUser, users, post, author, comments} = this.props
    debugger
    const sessionId = currentUser.id;
    // debugger
    return (
      <div className="PostShowBackground">
        {author.full_name ? (
          <title>
            {author.full_name}
            {` (@${author.username}) • Clonestagram Profile`}{" "}
          </title>
        ) : (
          <title>{`(@${author.username}) • Clonestagram Profile`} </title>
        )}
        <div className="postShowBox">
          <div>
            <img width="600px" height="600px" src={post.photoUrl} />
          </div>
          <div className="postShowInfo">
            <div className="postShowUser">
              <Link className="postUsernames" to={`/users/${author.id}`}>
                <div className="postShowPfpUsername">
                  <img src={post.pfp} />
                  <p>{author.username}</p>
                </div>
              </Link>
            </div>
            <div className="postShowComments">
              <div className="postShowComment">
                <Link to={`/users/${author.id}`}>
                  <img className="userShowPfp" src={post.pfp} />
                </Link>
                <div className="commentUsernameAndComment">
                  <Link
                    className="commentUsername"
                    to={`/users/${author.id}`}
                  >
                    <p>{author.username}</p>
                  </Link>
                  <p>{post.caption}</p>
                </div>
              </div>
              {comments.map(comment => {
                let userPhotoUrl;
                let user = users.find(user => user.id == comment.author_id);
                if (user) {
                  userPhotoUrl = user.photoUrl;
                }
                let commentor = users.find(
                  use => use.id === comment.author_id)
                // debugger
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
                      {commentor.id === sessionId ||
                      author.id === sessionId ? (
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
                <LikeContainer post={post} postId={post.id} postLikes={post.likes}/>
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