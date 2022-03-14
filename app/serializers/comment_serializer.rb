class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :thumb, :created_at

  has_one :post
  has_one :user
end
