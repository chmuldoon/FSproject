import React from "react";
import { connect } from "react-redux";
import Follow from "./follow";
import { deleteFollow, fetchFollows, createFollow } from "../../actions/follow_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  // debugger
  let targetId = parseInt(ownProps.match.params.userId);
  let target_follows =state.entities.users[targetId].passive_follows;
  let follow_status = state.entities.users[targetId].hasFollowed;
  let currentUser = state.entities.users[state.session.id];
  let userId = ownProps.userId
  return {
    currentUser,
    user: ownProps.user,
    targetId,
    userId
  };
  
};

const mapDispatchToProps = dispatch => ({
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow)),

  fetchFollows: () => dispatch(fetchFollows())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Follow)
);