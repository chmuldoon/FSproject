@follows.each do |follow|
  json.extract! follow, :id, :target_id, :follower_id
end