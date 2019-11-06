export const createComment = (comment) => (
  $.ajax({
    method: "POST",
    url: `/api/comments`,
    data: { comment }
  })
)
export const fetchComments = () => (
  $.ajax({
    method: "POST",
    url: `/api/comments`
  })
)
export const deleteComment = (commentId) => {
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`
  })
}