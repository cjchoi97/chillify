# == Schema Information
#
# Table name: albums
#
#  id        :bigint           not null, primary key
#  title     :string           not null
#  artist_id :integer          not null
#  year      :string           not null
#
class Album < ApplicationRecord
  validates :title, :year, presence: true

  belongs_to :artist

  has_many :songs, dependent: :destroy
  
  has_one_attached :cover

  before_destroy :delete_album_cover


  def delete_album_cover
    self.cover.purge
  end

end
