import { connect } from 'react-redux';
import { fetchPost, deletePost, fetchPosts } from '../../actions/post_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const post = state.entities.posts[ownProps.match.params.postId]
  return {
    post,
  }
};
const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: (id) => dispatch(fetchPost(id)),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);