class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :thumb
  has_one :post
end
