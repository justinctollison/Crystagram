class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            UserMailer.with(user: @user).welcome_email.deliver_later
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        if user.id == @current_user.id
            if user.update(edit_user_params)
                render json: user
            else
                render json: { errors: user.errors }
            end
        end
    end

    def me
        render json: @current_user
    end

    def follow
        user = User.find(params[:id])
        @current_user.followers << user
        # redirect_back(fallback_location: user_path(@user))
      end
      
      def unfollow
        user = User.find(params[:id])
        @current_user.followed_users.find_by(follower_id: user.id).destroy
        # redirect_back(fallback_location: user_path(@user))
      end


    private

    def user_params
        params.permit(:username, :image_url, :email, :bio, :password, :password_confirmation)
    end

    def edit_user_params
        params.require(:user).permit(:username, :image_url, :email, :bio, :password, :password_confirmation)
    end

end
