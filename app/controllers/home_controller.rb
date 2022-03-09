class HomeController < ApplicationController
  def index
    @texts = Text.all
    @banners = Banner.where(page: "Home")
    @lines = Line.all
    @artists = Artist.all   
  end
  
  def contacto
    @text1 = Text.find(8)
  end

  def aboutUs
    @text1 = Text.find(8)
  end

  def infoExclusive
  end

  def subInfoMaterial
  end

  def artist
    @artists = Artist.all
  end
end
