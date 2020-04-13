class RemoveNullFromPlaylists < ActiveRecord::Migration[5.2]
  def change
    change_column_null :playlists, :private, true
  end
end
