json.extract! user, :id, :username, :email, :full_name
json.photoUrl url_for(user.profilepic)