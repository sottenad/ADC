class UsersController < ApplicationController
  def index
  	@users = User.all
  end
  def new
  	@user = User.new
  end
  
  def create		
  	@user = User.new(params[:user])
  	if @user.save!
  		redirect_to root_url, :notice => "Signed Up"
  	else
  		render "new"
  	end
  end
end
