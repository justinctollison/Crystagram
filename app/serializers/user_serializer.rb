class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :image_url, :password_digest
end
