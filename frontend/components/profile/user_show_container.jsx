import { connect } from 'react-redux';
import React from 'react';
import UserShowForm  from './user_show_form';
import { fetchUser, fetchUsers, createFollow, deleteFollow } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';


const msp = (state, ownProps) => {
  // debugger
  let currentUser = state.entities.users[state.session.id];
  
  let profile = state.entities.users[parseInt(ownProps.match.params.userId)];

  return ({
    currentUser,
    profile,
  })
 
}
const mdp = (dispatch, ownProps) =>({
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers()),
    createFollow: (target_id) => dispatch(createFollow(target_id)),
    deleteFollow: (target_id) => dispatch(deleteFollow(target_id))
    
  
});




export default connect(msp, mdp)(UserShowForm)