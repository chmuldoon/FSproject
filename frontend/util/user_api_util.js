export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/users/"
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`,
    
  });
};
export const createFollow = (target_id) => (
    $.ajax({
      method: "POST",
      url: '/api/follows',
      data: { follow: { target_id, } }
      //if fails try post_id: post_id
  })
);

export const deleteFollow = (target_id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/follows/${target_id}`
  })
);