
export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: { like }
  })  
)

export const fetchAllLikes = like =>
  $.ajax({
    method: "Get",
    url: "api/likes",
  });

export const deleteLike = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`,
  })
)

