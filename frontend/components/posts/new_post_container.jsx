import NewPost from "./new_post";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";
const mapStateToProps = (state, ownProps) => {
  let post = {
    caption: '',
    user_id: state.session.id
  }
  return ({
    post
  })
};

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewPost)
);

