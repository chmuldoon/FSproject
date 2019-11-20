import NewPost from "./new_post";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createPost } from "../../actions/post_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  let post = {
    caption: '',
    author_id: state.session.id
  }
  // debugger
  return ({
    post
  })
  

};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewPost)
);

