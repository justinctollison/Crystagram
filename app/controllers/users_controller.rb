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
            if user.update(user_params)
                render json: user
            else
                render json: { errors: user.errors }
            end
        end
    end

    def me
        render json: @current_user
    end


    private

    def user_params
        params.require(:user).permit(:username, :image_url, :email, :bio, :password, :password_confirmation)
    end

end
