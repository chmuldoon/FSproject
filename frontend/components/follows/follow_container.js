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

  return {
    follower_id: state.session.id,
    target_id: targetId,
    target_follows,
    follow_status
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