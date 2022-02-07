class LinesController < ApplicationController

  def index
    @lines = Line.all
  end

  def show
    @line = Line.find(params[:id])
    @rooms = Room.where(line: @line)

    # case line.name
    #   when "exclusive"
    #     redirect_to infoExclusive_path(line: line)
    #   when "pro"
    #     redirect_to infoPro_path(line: line)
    #   else
    #     redirect_to infoLikePro_path(line: line)
    # end
  end


  # def infoExclusive
  # end
  
  # def infoPro
  # end

  # def infoLikePro
  # end

  

end