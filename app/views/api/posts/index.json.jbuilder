  @posts.includes(:author).each do |post|
    json.set! post.id do
      json.extract! post, :id, :caption, :author, :likes, :likers
      json.extract! post.author, :username
      json.photoUrl url_for(post.photo)
      json.likeCount post.likes.count
      json.hasLiked post.likes.exists?(user_id: current_user.id)
      json.pfp url_for(post.author.profilepic)
    end
  end
