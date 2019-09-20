class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    @like.save
    render :index
  end


  def index
    @likes = Like.all 
    render :index
  end
 
  

  def destroy
    
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
    # where(user_id: current_user.id).where(post_id: 8 )
    # debugger
    @like.destroy
    render :index
  end

  private
  def like_params
    params.require(:like).permit(:post_id)
  end
end
