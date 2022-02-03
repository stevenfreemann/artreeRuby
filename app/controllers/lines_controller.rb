class LinesController < ApplicationController

  def index
    @lines = Line.all
  end

  def infoExclusive
    @rooms = Room.where(line: 1)
    @line = Line.find(1)
  end

  def infoPro
    @rooms = Room.where(line: 2)
    @line = Line.find(2)
  end

end