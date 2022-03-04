class LinesController < ApplicationController

  def index
    @lines = Line.all
  end
  
  def show
    @line = Line.find(params[:id])
    @rooms = Room.where(line: @line)

    @line.name == "pro" ?       
    @banners = Banner.where(page: "Line Pro")
    :
    @banners = Banner.where(page: "Line Exclusive")

  end
end
