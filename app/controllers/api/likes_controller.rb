class Api::LikesController < ApplicationController

  def create
    # debugger
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    @like.save
    # @post = @like.post
    render :show
  end  

  def destroy
    debugger
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
    
    # debugger
    # @post = @like.post
    @like.destroy
    render :show
  end


  def like_params
    params.require(:like).permit(:post_id, :user_id)
  end
end
