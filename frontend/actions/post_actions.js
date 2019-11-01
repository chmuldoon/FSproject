import * as PostApiUtil from "../util/post_apit_util";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = id => dispatch => (
  PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

// export const updatePost = post => dispatch => (
//   PostApiUtil.updatePost(post)
//     .then(post => dispatch(receivePost(post)))
// );

export const deletePost = postId => dispatch => (
  PostApiUtil.deletePost(postId).then(post => dispatch(removePost(postId)))
);

export const createLike = post_id => dispatch => (
  PostApiUtil.createLike(post_id).then(post => dispatch(receivePost(post)))
);


export const deleteLike = (post_id) => (dispatch) => (
  PostApiUtil.deleteLike(post_id).then(post => dispatch(receivePost(post)))
);

// export const createComment = post_id => dispatch => (
//   PostApiUtil.createComment(post_id).then(post => dispatch(receivePost(post)))
// );


// export const deleteComment = (post_id) => (dispatch) => (
//   PostApiUtil.deleteComment(post_id).then(post => dispatch(receivePost(post)))
// );


const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});
