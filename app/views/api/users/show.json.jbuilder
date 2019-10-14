json.partial! "api/users/user", user: @user
json.photoUrl url_for(@user.profilepic)
json.extract! @user.active_follows
json.extract! @user.passive_follows

# json.followId @user.passive_follows.where

json.hasFollowed @user.passive_follows.exists?(follower_id: current_user.id)


