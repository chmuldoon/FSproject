Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show, :index, :update]
    resources :posts
    resources :likes, only: [:create, :index, :destroy, :show]
    resources :follows, only: [:create, :index, :destroy, :show]
    resources :comments, only: [:create, :index, :destroy]
  end

  root "static_pages#root"

end
