import React from 'react';
import { Link } from 'react-router-dom';
import LikeShowContainer from '../likes/like_show_container';


const PostIndexItem = ({ post, deletePost }) => {
  console.log(post)
  return (
    <div className="photoInIndex">
      <div className="photoUpperIndexContent">

        <div className="pfp">

          <img src={post.pfp}/>
        </div>

        <div className="postName">
          <Link className="extraDetailName" to={`/users/${post.author_id}`}>{post.author.username}</Link>
        </div>

      </div> 
      <div className="ActualPhoto">
        <img src={post.photoUrl} />
      </div>
      <div className="photoLowerIndexContent">
        <div className="post-options">
          <span><LikeShowContainer post={post} /><button>Comment</button></span>
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
  );
};

export default PostIndexItem;