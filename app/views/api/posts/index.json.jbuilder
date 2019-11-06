
    json.array! @posts do |post|
      json.extract! post, :id, :caption, :author, :likes, :likers, :comments, :commentors
      json.extract! post.author, :username
      json.photoUrl url_for(post.photo)
      json.likeCount post.likes.count
      json.hasLiked post.likes.exists?(user_id: current_user.id)
      json.pfp url_for(post.author.profilepic)
    end
