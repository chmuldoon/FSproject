import { connect } from 'react-redux';
import { fetchPost, deletePost, fetchPosts} from '../../actions/post_actions';
import PostShow from './post_show';
import { fetchUsers } from '../../actions/user_actions';
import { deleteComment, fetchAllComments } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { closeModal, openListModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  // const post = state.entities.posts[parseInt(ownProps.match.params.postId)]
  // debugger
  // debugger
  const post =
    ownProps.post !== undefined
      ? state.entities.posts[ownProps.post.id]
      : state.entities.posts[parseInt(ownProps.match.params.postId)];
  const users = Object.values(state.entities.users);
  const author = state.entities.users[post.author_id];
  // debugger
  const comments = Object.values(state.entities.comments).filter(
    comment => comment.post_id === post.id
  );
  const CommentorIds = comments.map(comment => comment.author_id);
  //// NEEDS TO FIX LOGIC FOR COMMENTORS, POSSIBLY A MORE SIMPLE 
  /////BACK END SOLUTION TO COMMENTS, similar to PFP for posts
  
  // debugger
  // const commentors = Object.values(state.entities.users).filter(
  //   user => 
  // );
//  debugger
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser,
    comments,
    // commentors,
    post,
    author,
    users
  }
};
const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openListModal: (modal, list, kind) =>
    dispatch(openListModal(modal, list, kind)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: id => dispatch(fetchPost(id)),
  deletePost: postId => dispatch(deletePost(postId)),
  createLike: post_id => dispatch(createLike(post_id)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  deleteLike: post_id => dispatch(deleteLike(post_id)),
  fetchAllComments: () => dispatch(fetchAllComments())
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);