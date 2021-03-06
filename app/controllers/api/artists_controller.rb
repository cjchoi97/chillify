class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all 
    render 'api/artists/index'
  end 

  def show
    @artist = Artist.find(params[:id])
    render "api/artists/show"
  end

  def follow
    @artist = Artist.find(params[:id])
    current_user.followed_artists << @artist
    render :show
  end

  def unfollow 
    @artist = Artist.find(params[:id])
    follow = Follow.find_by(
      followable_id: @artist.id,
      user_id: current_user.id,
      followable_type: 'Artist'
    )

    follow.destroy
    render :show
  end
end

