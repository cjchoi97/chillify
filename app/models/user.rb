# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  preferred_name  :string           not null
#  gender          :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  birth_date      :date             not null
#
class User < ApplicationRecord
  validates :username, :email, :preferred_name, 
            :gender, :password_digest, :session_token, 
            :birth_date, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :gender, :inclusion => { :in => %w(female male nonbinary) }
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :playlists, dependent: :destroy

  has_many :follows, as: :followable, dependent: :destroy

  has_many :followed_accounts,
    foreign_key: :user_id,
    class_name: :Follow,
    dependent: :destroy

  has_many :followed_artists,
    through: :followed_accounts,
    source: :followable,
    source_type: :Artist


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user       
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcrypted = BCrypt::Password.new(self.password_digest)
    bcrypted.is_password?(password)
  end

end
