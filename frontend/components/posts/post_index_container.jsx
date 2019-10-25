import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, createLike, deleteLike, createComment, deleteComment  } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    
    posts: Object.values(state.entities.posts)
    //.filter() ONLY FOLLOWING LOGIC
      // if Object.values(state.entities.users[0].following)post.author.id 
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  // fetchUsers: () => dispatch(fetchUsers())
  createLike: post_id => dispatch(createLike(post_id)),
  deleteLike: post_id => dispatch(deleteLike(post_id)),
  createComment: post_id => dispatch(createComment(post_id)),
  deleteComment: post_id => dispatch(deleteComment(post_id))
});




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);