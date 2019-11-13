json.array! @users do |user|
  json.extract! user, :id, :username, :email, :full_name, :posts, :likes, :active_follows, :passive_follows, :followers
  json.photoUrl url_for(user.profilepic)
end