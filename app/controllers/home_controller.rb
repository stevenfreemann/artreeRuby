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

  def infoExclusive
  end

  def subInfoMaterial
  end

  def artist
    artist=Artist.all
    @artistas=[]
    artist.each { |x|
      obj=x.attributes
      obj["img"]= Artist.file
      @artistas << obj
    }
  end
end
