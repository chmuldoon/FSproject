


json.extract! user, :id, :username, :email, :full_name, :likes, :active_follows, :passive_follows, :bio, :followers, :followings, :liked_posts
json.photoUrl url_for(user.profilepic)
json.extract! user.active_follows
json.followerID user.followers.map { |follower| follower.id}
json.extract! user.passive_follows
countHash = Hash.new(0)
user.liked_posts.each { |post| countHash[post.author_id] += 1 }
json.favorites countHash.sort_by {|k, v| v}.reverse.map {|subArr| subArr[0]}[0,5]


  

json.set! :posts do 
  user.posts.each do |post|
    json.set! post.id do 
     json.extract! post, :id, :caption, :author_id, :created_at
     json.photoUrl url_for(post.photo)
    end 
  end 
end
