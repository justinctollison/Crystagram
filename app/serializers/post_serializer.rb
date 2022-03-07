class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :image_url, :quote, :title, :likes, :comments
  has_many :comments
  has_one :user
end
