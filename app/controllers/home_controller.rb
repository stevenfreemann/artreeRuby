class HomeController < ApplicationController
  def index
    puts "entro al index"
    if current_user
        @current_user=current_user
        puts "HAY UN USUARIO"
    end  
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
