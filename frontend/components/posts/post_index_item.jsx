
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
  // componentDidMount() {
    // debugger
    // this.props.fetchPost(this.props.post.id)
  // }
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
    // debugger
    const {post} = this.props
    // debugger

    let comments;
    post.comments.length > 2 ? 
    comments = [ post.comments[0], post.comments[post.comments.length - 1]]
     : comments = post.comments

    const commentSection = comments.map(comment => {
      let commentor = post.commentors.find(
        obj => obj.id == comment.author_id
      );
        return (
          <div className="commentCaption">
            <Link className="extraDetailName" to={`/users/${commentor.id}`}>
              {commentor.username}
            </Link>
           <p>{comment.body}</p>
        </div>
      );
    });
      // return (
      //   <div>
      //     <Link className="extraDetailName" to={`/users/${comment.author_id}`}>
      //       {username}
      //     </Link>
      //     <p>{comment.body}</p>
      //   </div>
      // );
    
    

    return (
      <div className="photoInIndex">
        <div className="photoUpperIndexContent">
          <div className="pfp">
            <img src={post.pfp} />
          </div>

          <div className="postName">
            <Link className="extraDetailName" to={`/users/${post.author.id}`}>
              {this.props.post.author.username}
            </Link>
          </div>
        </div>
        <div className="ActualPhoto">
          <img src={post.photoUrl} />
        </div>
        <div className="photoLowerIndexContent">
          <div className="likes-and-count">
            <div className="Like-Button">
              <LikeContainer post={post} postId={post.id}/>
              
              <Link className="Comment-Button" to={`/posts/${post.id}`}>
                <img src="https://icon-library.net/images/instagram-comment-icon/instagram-comment-icon-15.jpg"/>
              </Link>
            </div>
            <p>{post.likeCount === 1 ? "1 like" : `${post.likeCount} likes`}</p>
          </div>
          <div className="GreaterCommentSection">
          <div className="commentSection">
            <div className="commentCaption">
              <Link className="extraDetailName" to={`/users/${post.author_id}`}>
                {post.author.username}
              </Link>
              <p>{post.caption}</p>
            </div>
          </div>
          {/* WILL FIX */}
          {post.comments.length > 2 ? (
            <Link className="commentLink" to={`/posts/${post.id}`}>
              <p>{`view all ${post.comments.length} comments`}</p>
            </Link>
          ) : (
            <div></div>
          )}
          {commentSection}

          </div>
        
          {/* <CommentContainer postId={post.id} post={post} /> */}
        
        </div>
      </div>
    );
  }
}

export default PostIndexItem
