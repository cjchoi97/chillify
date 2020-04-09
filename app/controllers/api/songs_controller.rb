class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render 'api/songs/index'
  end
end
