import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, createLike, deleteLike, fetchPost  } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { createComment, deleteComment, fetchComments } from '../../actions/comment_actions';

const mapStateToProps = state => {
  let currentUser = state.entities.users[state.session.id];

  // let followingIds = currentUser.followings.map(
  //   following => following.id
  // );

  return {
    posts: Object.values(state.entities.posts)
    // .filter(post =>
    //   followingIds.includes(post.author.id)
    // )
    //.filter() ONLY FOLLOWING LOGIC
    // if Object.values(state.entities.users[0].following)post.author.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  // fetchPost: (id) => dispatch(fetchPost(id)),
  // // fetchUsers: () => dispatch(fetchUsers())
  // createLike: post_id => dispatch(createLike(post_id)),
  // deleteLike: post_id => dispatch(deleteLike(post_id)),
  // createComment: post_id => dispatch(createComment(post_id)),
  // deleteComment: post_id => dispatch(deleteComment(post_id))
});




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);