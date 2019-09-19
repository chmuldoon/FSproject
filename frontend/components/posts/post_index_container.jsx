import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    posts: Object.keys(state.posts).map(id => state.posts[id])
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: id => dispatch(deletePost(id)),
  // fetchUsers: () => dispatch(fetchUsers())
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);