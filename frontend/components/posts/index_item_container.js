import { connect } from "react-redux";
import PostIndexItem from "./post_index_item";
import { fetchPost, fetchPosts } from "../../actions/post_actions";
import { withRouter } from "react-router-dom";
const mapStateToProps = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id];
  const post = state.entities.posts[ownProps.post.id];
  const author = state.entities.users[post.author_id];

  // debugger
  return {
    currentUser,
    post,
    author,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),

  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: id => dispatch(fetchPost(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndexItem));