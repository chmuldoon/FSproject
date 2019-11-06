import React from "react";
import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";
import { withRouter } from "react-router-dom";

import Like from "./like";

const msp = (state, ownProps) => {
  let postId = ownProps.postId;
  return {
    currentUser: state.entities.users[state.session.id],
    post: ownProps.post,
    postId
  };

}
const mdp = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: id => dispatch(deleteLike(id)),
  // fetchPost: id => dispatch(fetchPost(id))
});

export default withRouter(connect(
  msp,
  mdp
)(Like));
