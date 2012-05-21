class ServiceController < PrivateController
	def index
		@vehicles = 'steve';
		
		#Define @vehicles by the params passed in
		if params.has_key?(:year) && params.has_key?(:make) && params.has_key?(:model)
			#We have all the info to find a trim list
			@vehicles = Vehicle.where("year = ? AND make = ? AND model = ? ", params[:year], params[:make], params[:model]).select("DISTINCT ON (trim) trim, model, make, year")	
		elsif params.has_key?(:year) && params.has_key?(:make)
			#Get Model
		  	@vehicles = Vehicle.where("make = ? AND year = ?", params[:make], params[:year]).select("DISTINCT ON (model) model, make, year")
		elsif params.has_key?(:year)
			#Get Make
		  	@vehicles = Vehicle.order("make").where("year = ?", params[:year]).select("DISTINCT ON (make) make, year")
		else
			#Get Year
		  	@vehicles = Vehicle.order("year DESC").select("DISTINCT ON (year) year")
		end
	
		respond_to do |format|
			format.html # new.html.erb
			format.json { render :json => @vehicles }
		end
	end
end
	  
