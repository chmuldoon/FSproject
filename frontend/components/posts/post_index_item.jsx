import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost }) => {
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
      <div className="photoLowerIndexContent"></div>
      <div className="addComments"></div>
    </div>
  );
};

export default PostIndexItem;