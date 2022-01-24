class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    def create
        post = Post.new(post_params)
        post.user_id = @current_user.id
        if post.save
            render json: post, status: :created
        else
            render json: { errors: post.errors }
        end
    end

    private

    def post_params
        params.permit(:text, :quote, :quote_person, :title, :image_url, :likes)
    end

end
