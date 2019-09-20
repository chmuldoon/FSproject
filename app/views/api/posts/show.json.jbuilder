json.extract! @post, :id, :caption, :author_id
json.extract! @post.author, :username
json.photoUrl url_for(@post.photo)
json.likeCount@post.likes.count
json.hasLiked @post.likes.exists?(user_id: current_user.id)
json.pfp url_for(@post.author.profilepic)
