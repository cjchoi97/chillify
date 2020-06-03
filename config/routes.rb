Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index] do 
      member do
        get 'playlists'
      end
    end
    resource :session, only: [:create, :destroy]

    resources :albums, only: [:index, :show]

    resources :playlists, only: [:index, :show, :create, :update, :destroy] do
      member do
        post :add_song, to: 'playlists#add_song', as: 'add_song'
        delete :remove_song, to: 'playlists#remove_song', as: 'remove_sgon'
      end
    end

    resources :searches, only: [:index]

    resources :artists, only: [:index, :show]

    resources :songs, only: [:index]

    resources :playlists_songs, only: [:create, :destroy] do
      collection do
        delete :remove
      end
    end

  end

  root "static_pages#root"
end
