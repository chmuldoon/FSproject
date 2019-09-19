json.extract! user, :id, :username, :email, :full_name, :likes
json.photoUrl url_for(user.profilepic)


  

json.set! :posts do 
  user.posts.each do |post|
    json.set! post.id do 
     json.extract! post, :id, :caption, :author_id, :created_at
     json.photo url_for(post.photo)
    end 
  end 
end
