json.extract! @comment, :id, :body, :author_id, :post_id
json.username @comment.author.username
json.pfp url_for(@comment.author.profilepic)