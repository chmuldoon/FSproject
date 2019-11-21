
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import CommentContainer from '../comments/comment_container';
import LikeContainer from '../likes/like_container';
export class PostIndexItem extends Component {
  constructor(props){
    super(props)
    // debugger
    this.state = {
      body: ''
    }

  }
  componentDidMount() {
    // debugger
    this.props.fetchPost(this.props.post.id)
  }
  // componentDidUpdate() {
  //   this.props.fetchPost(this.props.post.id)

  // }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      // this.fetchPost(this.props.post.id)
    }
  }
  // handleLike(e){
  //   // e.preventDefault();
  //   if (this.props.post.hasLiked){
  //     this.props.deleteLike(this.props.post.id)
  //   }else{
  //     this.props.createLike(this.props.post.id) 
  //   }
  // }


  render() {
    if (!this.props.post) {
      return [];
    }
    // debugger
    const {post} = this.props
    let comments;
    post.comments.length > 2 ? 
    comments = [ post.comments[0], post.comments[post.comments.length - 1]]
     : comments = post.comments

    const commentSection = comments.map(comment => {
        return (
          <div className="commentCaption">
            <Link className="extraDetailName" to={`/users/${comment.author_id}`}>
              {comment.username}
            </Link>
           <p>{comment.body}</p>
        </div>
      );
    });
    // debugger
    return (
      <div className="photoInIndex">
        <div className="photoUpperIndexContent">
          <div className="pfp">
            <img src={post.pfp} />
          </div>

          <div className="postName">
            <Link className="extraDetailName" to={`/users/${post.author_id}`}>
              {this.props.post.username}
            </Link>
          </div>
        </div>
        <div className="ActualPhoto">
          <img src={post.photoUrl} />
        </div>
        <div className="photoLowerIndexContent">
          <div className="likes-and-count">
            <div className="Like-Button">
              <LikeContainer post={post} postId={post.id} />
              <div
                className="Comment-Button"
                onClick={() => this.props.openShowModal("postShow", post)}
              >
                <img src="https://icon-library.net/images/instagram-comment-icon/instagram-comment-icon-15.jpg" />
              </div>
            </div>
            {/* possibly incorporate more edge cases */}
            <p
              className="PostLikeCount"
              onClick={() => this.props.openListModal("list", post.likers, "Likers")}
            >
              {post.likes.length === 1
                ? "1 like"
                : `${post.likes.length} likes`}
            </p>
          </div>
          <div className="GreaterCommentSection">
            <div className="commentSection">
              <div className="commentCaption">
                <Link
                  className="extraDetailName"
                  to={`/users/${post.author_id}`}
                >
                  {post.username}
                </Link>
                <p>{post.caption}</p>
              </div>
            </div>
            {/* WILL FIX */}
            {post.comments.length > 2 ? (
              <div
                className="commentLink"
                onClick={() => this.props.openShowModal("postShow", post)}
              >
                {/* <Link className="commentLink" to={`/posts/${post.id}`}> */}
                {/* </Link> */}
                <p>{`view all ${post.comments.length} comments`}</p>
              </div>
            ) : (
              <div></div>
            )}
            {commentSection}
          </div>

          <CommentContainer postId={post.id} post={post} />
        </div>
      </div>
    );
  }
}

export default PostIndexItem
