import React from "react";
import { connect } from "react-redux";
import { deleteFollow, createFollow } from "../../actions/follow_actions";
import { withRouter } from "react-router-dom";
import Follow from "./follow";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.entities.users[state.session.id].id;
  return {
    currentUserId,
    user: ownProps.user,
    userId: ownProps.userId
  };
  
};
const mapDispatchToProps = dispatch => ({
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow)),
  fetchUser: id => dispatch(fetchUser(id)),
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Follow)
);