class RoomsController < ApplicationController
  before_action :set_room, only: %i[ show edit update destroy ]

  def show
    @photos = Photo.where(room: @room).to_a
    @title = "#{@room.line.name} - #{@room.name}"
  end

  private
  def set_room
    @room = Room.find(params[:id])
  end

end