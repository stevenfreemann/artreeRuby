Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  mount API::Base, at: "/"
  get 'home/index'
  get 'contacto' => 'home#contacto'
  get 'infoMaterials' => 'materials#index'
  get 'line/:id' => 'lines#show'
  get 'subInfoMaterial' => 'home#subInfoMaterials'
  get 'cart' =>'wish_item#shoppingCart' 
  get 'room/:id' => 'rooms#show'
  get 'likeProMarket' => 'like_pro#likeProMarket'
  get 'infoFrames' => 'materials#infoFrame'
  get 'infoCanvas' => 'materials#infoCanvas'
  get 'infoPapers' => 'materials#infoPapers'
  get 'infoAcrilics' => 'materials#infoAcrilics'
  get 'artist' => 'home#artist'
  get 'pay' => 'payment#pay'
  get 'infoArtist' => 'home#infoArtist'
  get 'infoPrint' => 'home#infoPrintPhotos'
  get 'infoPurchase' => 'home#infoPurchase'
  get 'profile' => 'profile#profile'
  get 'about' => 'home#aboutUs'
  get 'failure' => 'transactions#failure'
  get 'success' => 'transactions#success'
  get 'wishlist' => 'wish_item#index'
  post 'wishItem' => 'wish_item#create'
  delete 'wishItem/:id' => 'wish_item#destroy'
  get 'get_info' => 'wish_item#get_info'
  get 'upload' => 'like_pro#upload'
  get 'stock' => 'transactions#stock'
  post 'correct_stock' => 'transactions#correct_stock'
  post 'transaction' => 'transactions#create'
  post 'wompi_response' => 'transactions#wompi_response'
  post 'payu_response' => 'transactions#payu_response'
  get 'result' => 'transactions#result'
  get 'test_mail' => 'transactions#test_mail'

  
  devise_for :users, controllers: {sessions: 'users/sessions', registrations: 'users/registrations'}
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  
end
