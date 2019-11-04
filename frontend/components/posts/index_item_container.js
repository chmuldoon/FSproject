import { connect } from "react-redux";
import PostIndexItem from "./post_index_item";
import { fetchPost, fetchPosts } from "../../actions/post_actions";
import { withRouter } from "react-router-dom";
const mapStateToProps = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id];
  // debugger
  return {
    currentUser
  }
}
const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: id => dispatch(fetchPost(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndexItem));