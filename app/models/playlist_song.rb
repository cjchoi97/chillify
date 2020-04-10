# == Schema Information
#
# Table name: playlist_songs
#
#  id          :bigint           not null, primary key
#  song_id     :integer          not null
#  playlist_id :integer          not null
#
class PlaylistSong < ApplicationRecord
  belongs_to :playlist

  belongs_to :song
end


