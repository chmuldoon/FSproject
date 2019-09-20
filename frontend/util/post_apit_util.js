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
export const createLike = (post_id) => (
   $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like: { post_id, } }
    //if fails try post_id: post_id
  })
);

export const deleteLike = (post_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/likes/${post_id}`
  })
);


// export const createPost = post => (
//   $.ajax({
//     url: 'api/posts',
//     method: 'POST',
//     data: { post }
//   })
// );

// export const updatePost = post => (
//   $.ajax({
//     url: `api/posts/${post.id}`,
//     method: 'PATCH',
//     data: { post }
//   })
// );

// export const deletePost = id => (
//   $.ajax({
//     url: `api/posts/${id}`,
//     method: 'DELETE'
//   })
// );

//
