class HomeController < PrivateController

  def index
	@vehicles = Vehicle.order("year DESC").select("DISTINCT ON (year) year")
	@carObject = Vehicle.where("id = ?", session[:vehicleid])
	@currentCar = session[:vehicleid]
    
    @productsForCar = Product.where('vehicles LIKE ?', "%#{@carObject[0].id.to_s}%");
    
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @vehicles }
    end  
    
    
  end
  
  def store
	@vehicles = Vehicle.where("year = ? AND make = ? AND model = ? AND trim = ? ", params[:year], params[:make], params[:model], params[:trim]).select("DISTINCT ON (trim) id, trim, model, make, year")
	@id = @vehicles[0].id	
	session[:vehicleid] = @id

	respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @vehicles }
    end
  end
  
  
 
  

  
end
