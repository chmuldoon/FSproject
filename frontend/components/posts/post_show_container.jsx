import { connect } from 'react-redux';
import { fetchPost, deletePost, fetchPosts} from '../../actions/post_actions';
import PostShow from './post_show';
import { fetchUsers } from '../../actions/user_actions';
import { deleteComment } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  const post = state.entities.posts[parseInt(ownProps.match.params.postId)]
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser,
    post,
    users: state.entities.users
  }
};
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: id => dispatch(fetchPost(id)),
  createLike: post_id => dispatch(createLike(post_id)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  deleteLike: post_id => dispatch(deleteLike(post_id))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);