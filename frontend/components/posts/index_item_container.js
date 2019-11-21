import { connect } from "react-redux";
import PostIndexItem from "./post_index_item";
import { fetchPost, fetchPosts } from "../../actions/post_actions";
import { withRouter } from "react-router-dom";
import { openShowModal, openListModal } from "../../actions/modal_actions";
import { openModal,  } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id];
  const post = state.entities.posts[ownProps.post.id];
  post["comments"] = Object.values(state.entities.comments).filter(
    comment => comment.post_id === post.id
  );
  // debugger

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
  openModal: modal => dispatch(openModal(modal)),
  openShowModal: (modal, post) => dispatch(openShowModal(modal, post)),
  openListModal: (modal, list, kind) => dispatch(openListModal(modal, list, kind)),

  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: id => dispatch(fetchPost(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndexItem));