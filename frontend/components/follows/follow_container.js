import React from "react";
import { connect } from "react-redux";
import Follow from "./follow";
import { deleteFollow, fetchFollows, createFollow } from "../../actions/follow_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let targetId = ownProps.targetId
  
  let follow = {
    follower_id: state.session.id,
    target_id: targetId
  };
  return ({
    follow
  })
  
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