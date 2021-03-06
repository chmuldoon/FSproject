import React from "react";
import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";
// import { withRouter } from "react-router-dom";

import Like from "./like";

const msp = (state, ownProps) => {
  let postId = ownProps.postId;
  return ({
    currentUser: state.entities.users[state.session.id],
    post: ownProps.post,
    postLike: ownProps.postLikes,
    postId
  })

}
const mdp = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: id => dispatch(deleteLike(id)),
  fetchPost: id => dispatch(fetchPost(id))
});

export default connect(
  msp,
  mdp
)(Like);
