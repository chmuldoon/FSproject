import * as UserApiUtil from '../util/user_api_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";


export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

export const fetchUsers = () => dispatch => (
  UserApiUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users)))
);
export const fetchFollows = () => dispatch => (
  UserApiUtil.fetchFollows().then(follows => dispatch(receiveFollows(follows)))
)

const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})
const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const createFollow = (target_id) => dispatch => (
  UserApiUtil.createFollow(target_id).then(user => dispatch(receiveUser(user)))
);


export const deleteFollow = (target_id) => (dispatch) => (
  UserApiUtil.deleteFollow(target_id).then(user => dispatch(receiveUser(user)))
);








