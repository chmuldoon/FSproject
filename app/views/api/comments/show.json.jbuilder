json.extract! @comment, :id, :body, :author_id, :post_id
json.username @comment.user.username
json.pfp url_for(@comment.user.profilepic)