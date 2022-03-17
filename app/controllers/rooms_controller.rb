class RoomsController < ApplicationController
  before_action :set_room, only: %i[ show edit update destroy ]

  def show
    @size_info = Size.where(line_id: @room, active: true)
    frame = Material.find_by(name: "Marco")
    @frames = SubMaterial.where(material: frame, active: true)
    paper = Material.find_by(name: "Papel")
    @papers = SubMaterial.where(material: paper, active: true)

    @photos = Photo.where("stock > ?", 0).where(room: @room).to_a
    @title = "#{@room.line.name} - #{@room.name}"

    @packing = Package.where(active: true)

  end

  private
  def set_room
    @room = Room.find(params[:id])
  end
end
