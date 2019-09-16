class Like < ApplicationRecord
  validates :user_id, :post_id, presence: true

  belongs_to :User,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :Post,
    foreign_key: :post_id,
    class_name: :Post

    


end
