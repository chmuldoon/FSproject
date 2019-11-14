import { connect } from 'react-redux';
import React from 'react';
import UserShowForm  from './user_show_form';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchAllFollows, createFollow, deleteFollow } from "../../actions/follow_actions";
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';

import { openModal, openShowModal } from '../../actions/modal_actions';
import { fetchAllComments } from '../../actions/comment_actions';
const msp = (state, ownProps) => {

  let currentUser = state.entities.users[state.session.id];
  // debugger
  let profile = state.entities.users[parseInt(ownProps.match.params.userId)];
  // debugger
  return ({
    users: Object.values(state.entities.users), 
    follows: Object.values(state.entities.follows),
    currentUser,
    profile,
  })
 
}
const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: id => dispatch(fetchUser(id)),
  // fetchUsers: () => dispatch(fetchUsers()),
  openModal: modal => dispatch(openModal(modal)),
  openShowModal: (modal, post) => dispatch(openShowModal(modal, post)),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  fetchAllComments: () => dispatch(fetchAllComments())

  // createFollow: (target_id) => dispatch(createFollow(target_id)),
  // deleteFollow: (target_id) => dispatch(deleteFollow(target_id))
});




export default connect(msp, mdp)(UserShowForm)