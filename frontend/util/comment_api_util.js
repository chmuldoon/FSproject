export const createComment = (comment) => (
  $.ajax({
    method: "POST",
    url: `/api/comments`,
    data: { comment }
  })
)
export const fetchAllComments = () => (
  $.ajax({
    method: "GET",
    url: `/api/comments`
  })
)
export const fetchComment = (id) => {
  return (
    $.ajax({
      url: `/api/comments/${id}`,
      method: "GET"
    })
  );
};
export const deleteComment = (commentId) => {
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`
  })
}