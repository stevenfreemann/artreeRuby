class LinesController < ApplicationController
  before_action :set_line, except: :infoLine
  before_action :rooms, except: :infoLine


  def index
    @lines = Line.all
  end

  def infoExclusive
  end
  
  def infoPro
  end

  def infoLikePro
  end

  
  def infoLine
    line = Line.find(params[:id])
    case line.name
      when "exclusive"
        redirect_to infoExclusive_path(line: line)
      when "pro"
        redirect_to infoPro_path(line: line)
      else
        redirect_to infoLikePro_path(line: line)
    end
  end

  private
  def set_line
    @line = params[:line]
  end

  def rooms
    @rooms = Room.where(line: @line)
  end
end