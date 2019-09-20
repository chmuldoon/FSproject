
import { Link } from 'react-router-dom';
// import LikeShowContainer from '../likes/like_show_container';
import React, { Component } from 'react'

export class PostIndexItem extends Component {
  constructor(props){
    super(props)
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
  
    const {post} = this.props
    return (
      <div className="photoInIndex">
        <div className="photoUpperIndexContent">

          <div className="pfp">

            <img src={post.pfp} />
          </div>

          <div className="postName">
            <Link className="extraDetailName" to={`/users/${post.author.id}`}>{this.props.post.author.username}</Link>
          </div>

        </div>
        <div className="ActualPhoto">
          <img src={post.photoUrl} />
        </div>
        <div className="photoLowerIndexContent">
          <div className="Like-Button">

            {post.hasLiked ? (
              
       
              <div className="heartDiv">
                <svg className='post-show-like' onClick={this.handleLike.bind(this)} className="heart-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="red" stroke="red" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-reactid="641"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
            ):(
              <div className="heartDiv">
                <svg className='post-show-like' onClick={this.handleLike.bind(this)} className="heart-empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-reactid="641"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
            )}
            <p >{(post.likeCount === 1)? "1 like" : `${post.likeCount} likes`}</p>
          </div>

          <div className="commentSection">
            <div className="commentCaption">
              <Link className="extraDetailName" to={`/users/${post.author_id}`}>{post.author.username}</Link>
              <p>{post.caption}</p>
            </div>
          </div>

          <div className="addComments"></div>
        </div>
      </div>
    )
  }
}

export default PostIndexItem


// const PostIndexItem = ({ post, deletePost }) => {
//   console.log(post)
//   return (
//     <div className="photoInIndex">
//       <div className="photoUpperIndexContent">

//         <div className="pfp">

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