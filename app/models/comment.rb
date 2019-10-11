class Comment < ApplicationRecord
  validates :author_id, :post_id, :body, presence: true;
  # validates :body, length: {minimum: 1}, allow_nil: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post
end
