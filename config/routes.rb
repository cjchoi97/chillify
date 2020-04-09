Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :albums, only: [:index, :show]

    resources :playlists, only: [:index, :show, :create, :update, :destroy]

    resources :artists, only: [:index, :show]

    resources :songs, only: [:index]

    resources :playlists_songs, only: [:create, :destroy]

  end

  root "static_pages#root"
end
