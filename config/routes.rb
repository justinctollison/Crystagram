Rails.application.routes.draw do
  
  resources :comments
  resources :posts
  resources :users

  #custom routes for signing up and checking current logined user. Used for users controller
  post "/signup", to: "users#create"
  get "/me", to: "users#me"

  #custom routes for login sessions
  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
