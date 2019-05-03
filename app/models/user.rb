class User < ApplicationRecord
    has_many :videos
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }
end
