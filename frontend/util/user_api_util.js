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
export const fetchFollows = () => {
  return $.ajax({
    method: "GET",
    url: "/api/follows/"
  });
};
export const createFollow = (target_id) => {
  // debugger
    return $.ajax({
      method: "POST",
      url: '/api/follows',
      data: { follow: { target_id: target_id, } }
  })
};

export const deleteFollow = (target_id) => {

  return $.ajax({
    method: "DELETE",
    url: `/api/follows/${target_id}`
  })
};
export const updateUser = user => {
  debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    contentType: false,
    processData: false,
    data: user
  });
};