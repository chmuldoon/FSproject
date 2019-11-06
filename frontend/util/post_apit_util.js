export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/posts',
  });
};

export const fetchPost = id => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`
  })
);
// export const createComment = (post_id) => (
//    $.ajax({
//     method: 'POST',
//     url: 'api/comments',
//     data: { comment: { post_id, } }
//   })
// );

// export const deleteComment = (post_id) => {

//   return $.ajax({
//     method: 'DELETE',
//     url: `api/comments/${post_id}`
//   })
// };


export const createPost = post => (
  $.ajax({
    url: 'api/posts',
    method: 'POST',
    data: { post }
  })
);

// export const updatePost = post => (
//   $.ajax({
//     url: `api/posts/${post.id}`,
//     method: 'PATCH',
//     data: { post }
//   })
// );

export const deletePost = id => (
  $.ajax({
    url: `api/posts/${id}`,
    method: 'DELETE'
  })
);

//
