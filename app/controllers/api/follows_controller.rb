class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    @follow.save
    @user = @follow.following
    render "api/users/show"
  end  

  def destroy
    @follow = Follow.find_by(follower_id: current_user.id, target_id: params[:id])
    @follow.destroy
    @user = @follow.following
    render "api/users/show"
  end


  def follow_params
    params.require(:follow).permit(:target_id, :follower_id)
  end
end
