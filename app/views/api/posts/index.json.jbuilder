<<<<<<< HEAD

@posts.each do |post|
=======
@posts.includes(:author).each do |post|
>>>>>>> e520645b91c90564c64a14bcd852eaecbe95ac89
    json.set! post.id do
      json.extract! post, :id, :author_id, :caption, :author, :likes, :likers, :comments, :commentors
      json.extract! post.author, :username
      json.photoUrl url_for(post.photo)
      json.likeCount post.likes.count
      json.hasLiked post.likes.exists?(user_id: current_user.id)
      json.pfp url_for(pox5st.author.profilepic)
    end
end
