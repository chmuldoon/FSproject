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

export const createPost = post => (
  $.ajax({
    url: 'api/posts',
    method: 'POST',
    contentType: false,
    processData: false,
    data: post 
  })
);

export const deletePost = id => (
  $.ajax({
    url: `api/posts/${id}`,
    method: 'DELETE'
  })
);

//
