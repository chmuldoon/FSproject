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
export const createFollow = (target_id) => {
    return $.ajax({
      method: "POST",
      url: '/api/follows/',
      data: { follow: { target_id, } }
  })
};

export const deleteFollow = (target_id) => {
  debugger
  return $.ajax({
    method: "DELETE",
    url: `/api/follows/${target_id}`
  })
};