import * as UserApiUtil from '../util/user_api_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

export const fetchUsers = () => dispatch => (
  UserApiUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users)))
);

const receiveAllUsers = users => ({
  type: RECEIVE__ALL_USERS,
  users
})
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});







