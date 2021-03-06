# == Schema Information
#
# Table name: songs
#
#  id       :bigint           not null, primary key
#  album_id :integer          not null
#  title    :string           not null
#  duration :string
#
class Song < ApplicationRecord
  validates :title, presence: true

  belongs_to :album

  has_one :artist,
    through: :album,
    source: :artist

  has_many :playlist_songs, dependent: :destroy

  has_many :playlists,
    through: :playlists_songs,
    source: :playlist

  has_one_attached :track
  
end
