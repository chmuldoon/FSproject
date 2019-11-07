import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import PostExplore from "./post_explore";


const mapStateToProps = state => {
  let currentUser = state.entities.users[state.session.id];
  // let followingIds = currentUser.followings.map(
  //   following => following.id
  // );

  return {
    currentUser,
    posts: Object.values(state.entities.posts)//.filter(post =>
      //!followingIds.includes(post.author.id)
    //)
    //.filter() ONLY FOLLOWING LOGIC
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers())
  // createLike: post_id => dispatch(createLike(post_id)),
  // deleteLike: post_id => dispatch(deleteLike(post_id)),
  // createComment: post_id => dispatch(createComment(post_id)),
  // deleteComment: post_id => dispatch(deleteComment(post_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostExplore);