class Api::SearchesController < ApplicationController

  def index
    term = params[:term]
    if term == ""
      @artists = @albums = @songs = []
      render :index
      return
    end

    @songs = Song.where("lower(title) LIKE ?", "#{term.downcase}%") || []
    @artists = Artist.where("lower(name) LIKE ?", "#{term.downcase}%") || []
    @albums = Album.where("lower(title) LIKE ?", "#{term.downcase}%") || []

    render :index
  end

end