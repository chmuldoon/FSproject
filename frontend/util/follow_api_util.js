export const fetchAllFollows = () => {

  return $.ajax({
    method: "GET",
    url: `/api/follows`
  });
};
export const fetchFollow = (id) => {
  return (
    $.ajax({
      url: `/api/follows/${id}`,
      method: "GET"
    })
  );
};
export const createFollow = follow => (
  $.ajax({
    method: "POST",
    url: `/api/follows`,
    data: { follow }
  })
)
export const deleteFollow = followId => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${followId}`
  });
};
