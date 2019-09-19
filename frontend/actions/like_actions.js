import * as LikeApiUtil from "../util/like_api_util";

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const fetchLikes = () => dispatch => (
  LikeApiUtil.fetchLikes().then(likes => dispatch(receiveAllLikes(likes)))
);

export const fetchLike = id => dispatch => (
  likeApiUtil.fetchLike(id).then(like => dispatch(receiveLike(like)))
);

export const createLike = like => dispatch => (
  likeApiUtil.createLike(like).then(like => dispatch(receiveLike(like)))
);

export const deleteLike = postId => dispatch => (
  likeApiUtil.deleteLike(postId).then(like => dispatch(removeLike(like)))
);

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
});