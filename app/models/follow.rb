class Follow < ApplicationRecord
  # validates :follower_id, :target_id, presence: true
  # validates :follower_id, uniqueness: { scope: :target_id}
  belongs_to :following,
    class_name: :User,
    foreign_key: :target_id


  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id


end
