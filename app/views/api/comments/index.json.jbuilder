@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :author_id, :post_id, :author
    json.extract! comment.author, :username

    # json.username post.author.username
    # json.pfp url_for(author.profilepic)
  end
end