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
  follow,
});

export const createFollow = follow => dispatch =>
  FollowApiUtil.createFollow(follow).then(follow =>
    dispatch(receiveFollow(follow))
  );

export const fetchFollows = () => dispatch =>
  FollowApiUtil.fetchFollows().then(follows =>
    dispatch(receiveAllFollows(follows))
  );

export const deleteFollow = userId => dispatch => (
  FollowApiUtil.deleteFollow(userId).then(follow => dispatch(removeFollow(follow)))
);
