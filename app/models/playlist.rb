# == Schema Information
#
# Table name: playlists
#
#  id      :bigint           not null, primary key
#  user_id :integer          not null
#  title   :string           not null
#  private :boolean          default(FALSE), not null
#
class Playlist < ApplicationRecord
  validates :title, presence: true
  validates :private, presence: true

  belongs_to :user

  has_many :playlist_songs, dependent: :destroy

  has_many :songs,
    through: :playlist_songs,
    source: :song

end
