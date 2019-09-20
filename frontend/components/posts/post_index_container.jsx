import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, createLike, deleteLike  } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  // fetchUsers: () => dispatch(fetchUsers())
  createLike: (post_id) => dispatch(createLike(post_id)),
  deleteLike: (post_id) => dispatch(deleteLike(post_id))

  
});
debugger



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);