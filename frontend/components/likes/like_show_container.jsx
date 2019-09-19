import { connect } from 'react-redux';

import { deleteLike, createLike } from '../../actions/like_actions';
import LikeShowForm from './like_show_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    post: ownProps.post,
  
  });


};

const mapDispatchToProps = dispatch => ({
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (id) => dispatch(deleteLike(id)),
  fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeShowForm);