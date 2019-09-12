class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.index
    if @post.save
      redirect_to :index
    else
      render json: @post.errors.full_messages, status: 422
    end
    
  end

  def index
    #Later we can add following dependency here
    @posts = Post.all
    render :index
  end

  def show
    @post = post.find(params[:id])
    render :show
  end

  # def update

  # end

  def destroy
    @post = post.find(params[:id])
    if post.destroy
      render :index
    else
      render: @post.errors.full_messages, status: 22
  end

  private

  def post_params
    params.require(:post).permit(:caption)
  end
end
