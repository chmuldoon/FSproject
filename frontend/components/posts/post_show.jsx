import React from 'react';
import { Link } from "react-router-dom";



class PostShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }
  handleLike(e) {
    // e.preventDefault();
    if (this.props.post.hasLiked) {
      this.props.deleteLike(this.props.post.id);
    } else {
      this.props.createLike(this.props.post.id);
    }
  }
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
    // this.props.fetchUsers();
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
                let userPhoto = users.find(user => user.id == comment.author_id)
                  .photoUrl;

                let commentor = post.commentors.find(
                  obj => obj.id == comment.author_id
                );

                return (
                  <div className="postShowcommentCaption">
                    <Link
                      className="extraDetailName"
                      to={`/users/${commentor.id}`}
                    >
                      <img className="userShowPfp" src={userPhoto} />
                      {commentor.username}
                    </Link>
                    <p>{comment.body}</p>
                  </div>
                );
              })}
            </div>
            <div className="postShowLowerSection"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostShow