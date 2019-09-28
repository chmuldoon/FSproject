json.partial! "api/users/user", user: @user
json.photoUrl url_for(@user.profilepic)
json.extract! @user.active_follows
json.extract! @user.passive_follows
# debugger
json.hasFollowed @user.active_follows.exists?(follower_id: current_user.id)


