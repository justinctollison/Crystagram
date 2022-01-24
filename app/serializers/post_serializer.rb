class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :image_url, :quote, :title, :likes
end
