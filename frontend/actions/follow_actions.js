import * as FollowApiUtil from "../util/follow_api_util";
export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveAllFollows = follows => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows
});

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  followId: follow.id,
});

export const createFollow = follow => dispatch => (
  FollowApiUtil.createFollow(follow)
  .then(follow => dispatch(receiveFollow(follow)))
);

export const fetchAllFollows = () => dispatch => (
  FollowApiUtil.fetchAllFollows()
  .then(follows => dispatch(receiveAllFollows(follows)))
);
export const fetchFollow = (follow) => dispatch =>
  FollowApiUtil.fetchFollow(follow).then(follow =>
    dispatch(receiveFollow(follow))
  );

export const deleteFollow = followId => dispatch => (
  FollowApiUtil.deleteFollow(followId).then(follow => dispatch(removeFollow(follow)))
);
