class Video < ApplicationRecord
    belongs_to :user, optional: true
end
