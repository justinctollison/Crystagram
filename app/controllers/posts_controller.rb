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

    def update
        post = Post.find(params[:id])
        if post && post.user.id == @current_user.id
            if post.update(post_params)
                render json: post
            else
                render json: { errors: post.errors }
            end
          else
            render json: { errors: "Post not found" }, status: :not_found
          end
    end


    def destroy
        post = Post.find(params[:id])
        if post && post.user.id == @current_user.id
            post.delete
        else
            render json: { errors: post.errors }
        end
        head :no_content
    end

    private

    def post_params
        params.require(:post).permit(:text, :quote, :quote_person, :title, :image_url, :likes)
    end

end
