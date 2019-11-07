export const createFollow = follow => (
  $.ajax({
    method: "POST",
    url: `/api/follows`,
    data: { follow }
  })
)

export const fetchFollows = () => (
  $.ajax({
    method: "POST",
    url: `/api/follows`
  })
)
export const deleteFollow = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${id}`
  });
};
