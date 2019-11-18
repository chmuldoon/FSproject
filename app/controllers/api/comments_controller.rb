class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.all
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    if @comment
      render :show
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  def update
    @comment = Comment.find(params[:id])
    
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(author_id: current_user, post_id: params[:id])
    @comment.destroy
    @post = @comment.post # possibly nil?
    render :show
  end

  
  def comment_params
    params.require(:comment).permit(:post_id, :author_id, :body)
  end
end
