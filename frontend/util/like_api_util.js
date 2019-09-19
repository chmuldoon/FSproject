export const fetchLikes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/likes',
  })
);

export const fetchLike = id => (
  $.ajax({
    method: 'GET',
    url: `api/likes/${id}`
  })
);
export const createLike = like => (
  $.ajax({
    url: 'api/likes',
    method: 'POST',
    data: { like }
  })
);

export const deleteLike = id => (
  $.ajax({
    url: `api/likes/${id}`,
    method: 'DELETE'
  })
);
