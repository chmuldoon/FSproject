import * as LikeApiUtil from "../util/like_api_util";

// export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const createLike = like => dispatch => {
  return LikeApiUtil.createLike(like)
    .then(like => {
      dispatch(receiveLike(like))
    })
  // .then(like => dispatch(receiveLike(like)))
};

export const deleteLike = postId => dispatch => {
  return LikeApiUtil.deleteLike(postId)
    .then(like => dispatch(removeLike(like)))
};
