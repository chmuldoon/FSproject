// export const fetchLikes = () => {
//   return (
//     $.ajax({
//       method: 'GET',
//       url: `api/likes`
//     })
//   );
// };

// export const fetchLike = post => {
//   return (
//     $.ajax({
//       method: 'GET',
//       url: `api/likes/${post.id}`
//     })
//   )
// };
export const createLike = like => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/likes',
      data: { like }
    })
  );
    
};

export const deleteLike = id =>{
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`,
  });
};
