class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      @user.profilepic.attach(io: File.open("#{Rails.root}/app/assets/images/icon.jpg"), filename: 'icon.jpg')

      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  def index
    @users = User.all
    render :index
  end
  def update 
    @user = current_user
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end 
  end 

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private 
  def user_params
    params.require(:user).permit(:username, :password, :profilepic, :full_name, :email, :bio)
  end
end
