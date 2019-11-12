@follows.each do |follow|
  json.set! follow.id do
    json.extract! follow, :id, :target_id, :follower_id, :follower, :target
  end
end