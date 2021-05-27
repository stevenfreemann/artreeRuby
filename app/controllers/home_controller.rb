class HomeController < ApplicationController
  def index
  end
  def contacto
  end
  def infoMaterials
  end
  def infoExclusive
  end
  def subInfoMaterial
  end
  def artist
    artist=Artistum.all
    @artistas=[]
    artist.each { |x|
      obj=x.attributes
      obj["img"]= Artistum.photo
      @artistas << obj
    }
  end
end
