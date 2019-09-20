export const fetchLikes = () => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/likes`
    })
  );
};

export const fetchLike = post => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/likes/${post.id}`
    })
  )
};
export const createLike = like => {

  return (
    $.ajax({
      url: 'api/likes',
      method: 'POST',
      data: { like }
    })
  );
    
};

export const destroyLike = like =>{
  return $.ajax({
    url: `api/likes/${like.id}`,
    method: 'DELETE',
    data: { like } 
  });
};
