import { connect } from 'react-redux';

import { deleteLike, createLike, fetchLikes } from '../../actions/like_actions';
import LikeShowForm from './like_show_form';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  let likersId = [];
  let likers = ownProps.post.likers;
  for (let i = 0; i < likers.length; i++) {
    likersId.push(likers[i].id);
  }
 

  return ({
   
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    
    post: ownProps.post,
    postId: ownProps.post.id,
    likes: ownProps.post.likes,
    likers,
    likersId,

  


  });


};

const mapDispatchToProps = dispatch => ({
  fetchLikes: () => dispatch(fetchLikes()),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like)),
  fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeShowForm);