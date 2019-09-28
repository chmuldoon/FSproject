json.extract! user, :id, :username, :email, :full_name, :likes, :followings, :followers, :active_follows, :passive_follows
json.photoUrl url_for(user.profilepic)
json.extract! user.active_follows
json.extract! user.passive_follows


  

json.set! :posts do 
  user.posts.each do |post|
    json.set! post.id do 
     json.extract! post, :id, :caption, :author_id, :created_at
     json.photo url_for(post.photo)
    end 
  end 
end
