import React from "react";
import { connect } from "react-redux";
import { deleteFollow, createFollow, fetchAllFollows } from "../../actions/follow_actions";
import { withRouter } from "react-router-dom";
import Follow from "./follow";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";
const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.entities.users[state.session.id].id;
  // debugger
  return {
    currentUserId,
    user: ownProps.user,
    userId: ownProps.userId,
    follows: ownProps.follows,
    followss: Object.values(state.entities.follows)
  };
  
};
const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow)),
  fetchUser: id => dispatch(fetchUser(id)),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Follow)
);