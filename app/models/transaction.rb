class Transaction < ApplicationRecord
  belongs_to :user

  serialize :products, Array
end
