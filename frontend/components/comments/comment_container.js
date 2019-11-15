import React from 'react';
import { connect } from "react-redux";
import Comment from './comment';
import { createComment, fetchAllComments, deleteComment } from '../../actions/comment_actions';
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let postId = ownProps.postId

  let comment = { 
    body: '',
    author_id: state.session.id,
    post_id: postId,
    post: ownProps.post
  }
  // debugger
  return ({
    comment
  })

}

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  fetchAllComments: () => dispatch(fetchAllComments())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment));