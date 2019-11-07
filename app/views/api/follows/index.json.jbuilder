@follows.each do |follow|
  json.set! follow.id do
    json.extract! follow, :id, :target_id, :follower_id
    json.extract! follow.follower, :username, :full_name
    json.extract! follow.following, :username, :full_name
  end
end