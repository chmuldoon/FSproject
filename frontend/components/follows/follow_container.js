import React from "react";
import { connect } from "react-redux";
import { deleteFollow, createFollow } from "../../actions/follow_actions";
import { withRouter } from "react-router-dom";
import Follow from "./follow";

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id];
  debugger
  return {
    currentUser,
    user: ownProps.user,
    userId: ownProps.userId
  };
  
};

const mapDispatchToProps = dispatch => ({
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow)),

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Follow)
);