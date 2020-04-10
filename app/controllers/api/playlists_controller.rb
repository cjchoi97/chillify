class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all 
    render 'api/playlists/index'
  end

  def show
    @playlist = Playlist.find(params[:id])
    render 'api/playlists/show'
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    @playlist = Playlist.find(params[:id])

    if @playlist.update(playlist_params)
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end

  end

  def destroy
    playlist = Playlist.find(params[:id])
    if playlist
      playlist.destroy
      render 'api/playlists/index'
    else
      render json: ["Playlist doesn't exist"], status: 404
    end
  end

  def add_song
    playlist_song = PlaylistSong.new(playlist_id: params[:id], song_id: params[:song_id])
    render 'api/playlists/show'
  end

  def remove_song
    playlist = Playlist.find(params[:id])
    song = Song.find(params[:song_id])
    playlist_song = PlaylistSong.find_by(playlist_id: params[:id], song_id: params[:song_id])
    playlist_song.destroy
    render 'api/playlists/show'
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title, :private)
  end
end
