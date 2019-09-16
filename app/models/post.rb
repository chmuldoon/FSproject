class Post < ApplicationRecord
  validates :author_id, presence: true
  has_one_attached :photo

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    foreign_key: :post_id,
    class_name: :Like
  
end
