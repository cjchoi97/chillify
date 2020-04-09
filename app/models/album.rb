# == Schema Information
#
# Table name: albums
#
#  id        :bigint           not null, primary key
#  title     :string           not null
#  artist_id :integer          not null
#  year      :integer          not null
#
class Album < ApplicationRecord
  validates :title, :year, presence: true

  belongs_to :artist

  has_many :songs, dependent: :destroy

end
