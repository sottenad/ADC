class UploadController < PrivateController
  def index
  	
  
  end
  
	
	require 'CSV'
	def processCsv
	  @numOfCars = 0
	  CSV.parse(params[:file].read) do |row|
	    Vehicle.create({
		    :id => row[0],
		    :make => row[1],    
		    :model => row[2],
		    :trim => row[3],
		    :year => row[4]
	    })
		@numOfCars += 1
	  end
	  
	end
	
   
end
