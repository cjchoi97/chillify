class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.boolean :private, null: false, default: false
    end

    add_index :playlists, :title
    add_index :playlists, :user_id
  end
end
