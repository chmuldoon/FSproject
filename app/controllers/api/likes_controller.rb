class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    @like.save
    @post = @like.post
    render "api/posts/show"
  end  

  def destroy
    
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
    @like.destroy
    @post = @like.post
    render "api/posts/show"
  end


  def like_params
    params.require(:like).permit(:post_id, :user_id)
  end
end
