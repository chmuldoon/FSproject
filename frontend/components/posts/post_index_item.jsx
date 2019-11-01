
import { Link } from 'react-router-dom';
// import LikeShowContainer from '../likes/like_show_container';
import React, { Component } from 'react'
import CommentContainer from '../comments/comment_container';

export class PostIndexItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      body: ''
    }
  }
  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }
  handleLike(e){
    // e.preventDefault();
    if (this.props.post.hasLiked){
      this.props.deleteLike(this.props.post.id)
    }else{
      this.props.createLike(this.props.post.id) 
    }
  }


  render() {
    // debugger
    
    const {post} = this.props
    if (post.comments.length > 2 ){
      var shortenedComments = [ post.comments[0], post.comments[2]]
    }
    let commentSection = []
    for (let i = 0; i < post.comments.length; i++) {
      let comment = post.comments[i];
      for (let j = 0; j < post.commentors.length; j++) {
        const commentor = post.commentors[j];
        if(commentor.id == comment.author_id){
          commentSection.push(`${commentor.id} ${commentor.username} ${comment.body}`);
        }
      }
    }
    commentSection = Object.values(commentSection).map(comment => {
      comment = comment.split(" ");
  
       return (
        <div className="commentCaption">
          <Link className="extraDetailName" to={`/users/${comment[0]}`}>
            {comment[1]}
          </Link>
          <p>{comment[2]}</p>
        </div>
      );
    })

   
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
            <p>{post.likeCount === 1 ? "1 like" : `${post.likeCount} likes`}</p>
          </div>

          <div className="commentSection">
            <div className="commentCaption">
              <Link className="extraDetailName" to={`/users/${post.author_id}`}>
                {post.author.username}
              </Link>
              <p>{post.caption}</p>
            </div>
          </div>
          {/* WILL FIX */}
          {/* {commentSection} */}
          {post.comments.length > 2 ? (
            <div>
              <Link to={`/posts/${post.id}`}>
                <p>{`view all ${post.comments.length} comments`}</p>
              </Link>
            </div>
          ) : (
            <div></div>
          )}

          {post.comments.length > 2
            ? shortenedComments.map(comment => {
            
                let commentor = post.commentors.find(
                  obj => obj.id == comment.author_id
                );
                return (
                  <div className="commentCaption">
                    <Link
                      className="extraDetailName"
                      to={`/users/${commentor.id}`}
                    >
                      {commentor.username}
                    </Link>
                    <p>{comment.body}</p>
                  </div>
                );
              })
            : post.comments.map(comment => {
                let commentor = post.commentors.find(
                  obj => obj.id == comment.author_id
                );
                return (
                  <div className="commentCaption">
                    <Link
                      className="extraDetailName"
                      to={`/users/${commentor.id}`}
                    >
                      {commentor.username}
                    </Link>
                    <p>{comment.body}</p>
                  </div>
                );
              })}

          <div className="addComments">
            <CommentContainer postId={post.id} post={post} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostIndexItem


// const PostIndexItem = ({ post, deletePost }) => {
//   console.log(post)
//   return (
//     <div className="photoInIndex">
//       <div className="photoUpperIndexContent">

//         <div classNa.bme="pfp">

//           <img src={post.pfp}/>
//         </div>

//         <div className="postName">
//           <Link className="extraDetailName" to={`/users/${post.author_id}`}>{post.author.username}</Link>
//         </div>

//       </div> 
//       <div className="ActualPhoto">
//         <img src={post.photoUrl} />
//       </div>
//       <div className="photoLowerIndexContent">
        
//           <LikeShowContainer post={post} />
        
//         <div className="commentSection">
//           <div className="commentCaption">
//             <Link className="extraDetailName" to={`/users/${post.author_id}`}>{post.author.username}</Link>
//             <p>{post.caption}</p>
//           </div>
//         </div>

//         <div className="addComments"></div>
//       </div>
//     </div>
//   );
// };

// export default PostIndexItem;