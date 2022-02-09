class MaterialsController < ApplicationController

  def index
    @materials = Material.all
  end
  
  def infoAcrilics
    @acrylic = Material.find_by(name: "Acrilico")
    @acrylics = SubMaterial.where(material: @acrylic)
  end

  def infoCanvas
    @canvas = Material.find_by(name: "Retablo")
    @canvases = SubMaterial.where(material: @canvas)
  end
  
  def infoFrame
    @frame = Material.find_by(name: "Marco")
    @frames = SubMaterial.where(material: @frame)
  end

  def infoPapers
    @paper = Material.find_by(name: "Papel")
    @papers = SubMaterial.where(material: @paper)
  end

  # def show
  #   @material = Material.find(params[:id])
  #   @sub_materials = SubMaterial.where(material: @material)
  # end

  
end
