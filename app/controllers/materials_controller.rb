class MaterialsController < ApplicationController

  def index
    @materials = Material.all
  end
  
  def infoAcrilics
    @acrylic = Material.find_by(name: "Acrilico")
    @acrylics = SubMaterial.where(material: @acrylic)
    @text1 = Text.find(7)
  end

  def infoCanvas
    @canvas = Material.find_by(name: "Retablo")
    @canvases = SubMaterial.where(material: @canvas)
    @text1 = Text.find(3)
    @text2 = Text.find(4)
  end
  
  def infoFrame
    @frame = Material.find_by(name: "Marco")
    @frames = SubMaterial.where(material: @frame)
    @text1 = Text.find(3)
    @text2 = Text.find(6)

  end

  def infoPapers
    @paper = Material.find_by(name: "Papel")
    @papers = SubMaterial.where(material: @paper)
    @text = Text.find(5)
  end
end
