# == Schema Information
#
# Table name: artists
#
#  id   :bigint           not null, primary key
#  name :string           not null
#  bio  :text
#
class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :albums, dependent: :destroy

  has_many :follows, as: :followable, dependent: :destroy
  
  has_many :songs,
    through: :albums,
    source: :songs

  has_many :followers,
    through: :follows,
    source: :user

  has_one_attached :photo

  before_destroy :delete_artist_photo

  def delete_artist_photo
    self.photo.purge
  end

end
