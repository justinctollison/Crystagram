class CommentsController < ApplicationController
    
    def index
        post = Post.find(params[:post_id])
        comments = post.comments
        render json: comments
    end

    def show
        post = Post.find(params[:post_id])
        comment = post.comments
        render json: comment
    end

    def create
        # comment = Comment.new(comment_params)
        post = Post.find(params[:post_id])
        comment = post.comments.new(comment_params)
        if comment.save
            render json: comment, status: :created
        else
            render json: { errors: comment.errors }
        end
    end

    # def update
    #     comment = Comment.find(params[:id])
    #     if comment && comment.user.id == @current_user.id
    #         if comment.update(comment_params)
    #             render json: comment
    #         else
    #             render json: { errors: comment.errors }
    #         end
    #       else
    #         render json: { errors: "Comment not found" }, status: :not_found
    #       end
    # end


    # def destroy
    #     comment = Comment.find(params[:id])
    #     if comment && comment.user.id == @current_user.id
    #         comment.delete
    #     else
    #         render json: { errors: comment.errors }
    #     end
    #     head :no_content
    # end

    private

    def comment_params
        params.require(:comment).permit(:text, :post_id)
    end

end
