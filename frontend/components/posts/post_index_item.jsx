import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ post, deletePost }) => {
  return (
    <div className="photoInIndex">
      <div className="photoUpperIndexContent">
        <button>{post.id}</button>
        <button> Edit post #{post.id}</button>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
      <div className="ActualPhoto"></div>
      <div className="photoLowerIndexContent"></div>
      <div className="addComments"></div>
    </div>
  );
};

export default PostIndexItem;