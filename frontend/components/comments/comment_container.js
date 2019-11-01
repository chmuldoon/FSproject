import React from 'react';
import { connect } from "react-redux";
import Comment from './comment';
import { createComment, fetchComments, deleteComment } from '../../actions/comment_actions';
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let postId = ownProps.postId

  let comment = {
    body: '',
    author_id: state.session.id,
    post_id: postId
  }
  // debugger
  return ({
    comment
  })

}

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  fetchComments: () => dispatch(fetchComments())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment));