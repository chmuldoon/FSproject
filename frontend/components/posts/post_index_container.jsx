import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, createLike, deleteLike, fetchPost  } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { createComment, deleteComment, fetchAllComments } from '../../actions/comment_actions';
import { fetchAllFollows } from '../../actions/follow_actions';
import { openModal, openShowModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
  let currentUser = state.entities.users[state.session.id];

  // let followingIds = currentUser.followings.map(
  //   following => following.id
  // );

  return {
    currentUser,
    posts: Object.values(state.entities.posts),
    follows: Object.values(state.entities.follows)
    // .filter(post =>
    //   followingIds.includes(post.author.id)
    // )
    //.filter() ONLY FOLLOWING LOGIC
    // if Object.values(state.entities.users[0].following)post.author.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchAllComments: () => dispatch(fetchAllComments()),

  // fetchPost: (id) => dispatch(fetchPost(id)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  openModal: modal => dispatch(openModal(modal)),
  openShowModal: (modal, post) => dispatch(openShowModal(modal, post)),

  // createLike: post_id => dispatch(createLike(post_id)),
  // deleteLike: post_id => dispatch(deleteLike(post_id)),
  // createComment: post_id => dispatch(createComment(post_id)),
  // deleteComment: post_id => dispatch(deleteComment(post_id))
});




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);