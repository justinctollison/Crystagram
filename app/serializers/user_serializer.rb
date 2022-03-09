class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :image_url, :password_digest, :followers
end
