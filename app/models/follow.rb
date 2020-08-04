# == Schema Information
#
# Table name: follows
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  followable_id   :integer          not null
#  followable_type :string           not null
#
class Follow < ApplicationRecord
  belongs_to :user

  belongs_to :followable, polymorphic: true

end
