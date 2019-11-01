import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, createLike, deleteLike, createComment, deleteComment  } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
  let currentUser = state.entities.users[state.session.id];

  let followingIds = currentUser.followings.map(
    following => following.id
  );
  // debugger;
  return {
    posts: Object.values(state.entities.posts)//.filter(post =>
      //followingIds.includes(post.author.id)
    //)
    //.filter() ONLY FOLLOWING LOGIC
    // if Object.values(state.entities.users[0].following)post.author.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  // fetchUsers: () => dispatch(fetchUsers())
  createLike: post_id => dispatch(createLike(post_id)),
  deleteLike: post_id => dispatch(deleteLike(post_id)),
  createComment: post_id => dispatch(createComment(post_id)),
  deleteComment: post_id => dispatch(deleteComment(post_id))
});




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);