class ChangeColumnInAlbums2 < ActiveRecord::Migration[5.2]
  def change
    change_column :albums, :year, :string
  end
end
