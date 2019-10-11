class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    # if
    @comment.save
    @post = @comment.post
    render "api/posts/show"
    # else
    #   render json: @comment.errors.full_messages, status: 422
    # end
  end

  def index
    @comments = Comment.all
    render "api/posts/show"
  end

  def destroy
    @comment = Comment.find_by(author_id: current_user, post_id: params[:id])
    @comment.destroy;
    @post = @comment.post # possibly nil?
    render "api/posts/show"
  end

  
  def comment_params
    params.require(:comment).permit(:post_id, :author_id, :body)
  end
end
