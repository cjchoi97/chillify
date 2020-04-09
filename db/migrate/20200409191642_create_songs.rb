class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :album_id, null: false
      t.string :title, null: false
    end

    add_index :songs, :title
    add_index :songs, :album_id
  end
end
