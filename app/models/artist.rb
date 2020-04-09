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
  
  has_many :songs,
    through: :albums,
    source: :songs

end
