json.array! @users do |user|
  json.extract! user, :id, :username, :email, :full_name, :posts, :likes
  json.photoUrl url_for(user.profilepic)
end