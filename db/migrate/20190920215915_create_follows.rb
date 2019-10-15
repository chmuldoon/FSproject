class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :target_id, null: false

      t.timestamps
    end
    # add_index :likes, :target_id, unique: true
    # add_index :likes, :follower_id, unique: true
  end
end
