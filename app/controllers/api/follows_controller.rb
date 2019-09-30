class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    @follow.save
    @user = @follow.following
    render "api/users/show"
  end  

  def destroy
    
    @follow = Follow.where(target_id: params[:id]).where(follower_id: current_user.id)[0]
    @follow.destroy

    render "api/users/show"
  end


  def follow_params
    params.require(:follow).permit(:target_id, :follower_id)
  end
end
