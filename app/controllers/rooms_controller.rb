class RoomsController < ApplicationController
  before_action :set_room, only: %i[ show edit update destroy ]

  def show
    @size_info = Size.where(line_id: @room)
    frame = Material.find_by(name: "Marco")
    @frames = SubMaterial.where(material: frame)
    paper = Material.find_by(name: "Papel")
    @papers = SubMaterial.where(material: paper)

    @photos = Photo.where(room: @room).to_a
    @title = "#{@room.line.name} - #{@room.name}"

    @packing = Package.all

    @sizes = Size.where(line_id: @room.line.id)
  end

  private
  def set_room
    @room = Room.find(params[:id])
  end
end
