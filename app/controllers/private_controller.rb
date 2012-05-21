class PrivateController < ApplicationController

before_filter :require_login
private
  def require_login
    if session[:user_id].nil?
      redirect_to "/sessions/new", :alert => "Please Log In"
    end
  end
  
end
