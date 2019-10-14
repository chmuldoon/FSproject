import { connect } from 'react-redux';
import { fetchPost, deletePost, fetchPosts, createLike, deleteLike } from '../../actions/post_actions';
import PostShow from './post_show';
import { fetchUsers } from '../../actions/user_actions';
const mapStateToProps = (state, ownProps) => {
    const post = state.entities.posts[ownProps.match.params.postId]
  
  return {
    post,
    users: state.entities.users
  }
};
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: id => dispatch(fetchPost(id)),
  createLike: post_id => dispatch(createLike(post_id)),
  deleteLike: post_id => dispatch(deleteLike(post_id))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);