json.array! @posts do |post|
  json.extract! post, :id, :caption, :author_id, :author, :likes, :likers
  json.photoUrl url_for(post.photo)
  json.pfp url_for(post.author.profilepic)
end
