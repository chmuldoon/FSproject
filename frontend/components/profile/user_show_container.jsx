import { connect } from 'react-redux';
import React from 'react';
import UserShowForm  from './user_show_form';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchAllFollows, createFollow, deleteFollow } from "../../actions/follow_actions";
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';

import { openModal, openShowModal, openListModal } from '../../actions/modal_actions';
import { fetchAllComments } from '../../actions/comment_actions';
const msp = (state, ownProps) => {
  // debugger
  let currentUser = state.entities.users[state.session.id];
  let profile = state.entities.users[parseInt(ownProps.match.params.userId)];
  let profilePosts = Object.values(state.entities.posts).filter(
    post => post.author_id === profile.id
  );
  let follows = Object.values(state.entities.follows).find(follow => follow.target_id === profile.id)
  let followings = Object.values(state.entities.follows).find(follow => follow.follower_id === profile.id)
  
  // debugger
  return ({
    profilePosts,
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
  openListModal: (modal, list, kind) =>
    dispatch(openListModal(modal, list, kind)),

  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  fetchAllComments: () => dispatch(fetchAllComments())

  // createFollow: (target_id) => dispatch(createFollow(target_id)),
  // deleteFollow: (target_id) => dispatch(deleteFollow(target_id))
});




export default connect(msp, mdp)(UserShowForm)