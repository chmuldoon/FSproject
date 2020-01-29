import React, { useEffect } from 'react';
import PostIndexItem from './post_index_item';
import { connect } from 'react-redux';
import { fetchPosts, createLike, deleteLike, fetchPost  } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { createComment, deleteComment, fetchAllComments } from '../../actions/comment_actions';
import { fetchAllFollows } from '../../actions/follow_actions';
import { openModal, openShowModal} from '../../actions/modal_actions';
import IndexItemContainer from './index_item_container';
const PostIndex = ({
  currentUser,
  fetchPosts,
  posts: {posts, loading}, 
  fetchUsers, 
  fetchPost,
  deleteLike,
  createLike,
  createComment,
  deleteComment,
  fetchAllFollows, 
  fetchAllComments
}) => {
  useEffect(() => {
    fetchPosts();
    // fetchUsers()
    // // debugger
    // fetchAllFollows()
    // fetchAllComments()
  },[fetchPosts]);

    const demoposts = []
    debugger

    const thePosts = demoposts.reverse().map(post => {
      // debugger
      return (
        <IndexItemContainer
          key={post.id}
          post={post}
          fetchPosts={fetchPosts}
          fetchPost={fetchPost}
          createLike={createLike}
          deleteLike={deleteLike}
          createComment={createComment}
          deleteComment={deleteComment}
        />
      );
      });

    return (
      <div className="index">
        <title>Clonestagram</title>
        {thePosts}
      </div>
    );
}
const mapStateToProps = state => {
  let currentUser = state.entities.users[state.session.id];

  // let followingIds = currentUser.followings.map(
  //   following => following.id
  // );

  return {
    currentUser,
    posts: Object.values(state.entities.posts),
    follows: Object.values(state.entities.follows)
    // .filter(post =>
    //   followingIds.includes(post.author.id)
    // )
    //.filter() ONLY FOLLOWING LOGIC
    // if Object.values(state.entities.users[0].following)post.author.id
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchPosts: () => dispatch(fetchPosts()),
//   fetchAllComments: () => dispatch(fetchAllComments()),

//   // fetchPost: (id) => dispatch(fetchPost(id)),
//   fetchUsers: () => dispatch(fetchUsers()),
//   fetchAllFollows: () => dispatch(fetchAllFollows()),
//   openModal: modal => dispatch(openModal(modal)),
//   openShowModal: (modal, post) => dispatch(openShowModal(modal, post))

// });
export default connect(mapStateToProps, {fetchPosts, fetchAllComments, fetchUsers, fetchAllFollows, openModal, openShowModal})(PostIndex);