class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :image_url, :quote, :title, :likes
  has_one :user
end
