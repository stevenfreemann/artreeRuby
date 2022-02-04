Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  mount API::Base, at: "/"
  get 'home/index'
  get 'contacto' => 'home#contacto'
  get 'infoMaterials' => 'home#infoMaterials'
  get 'line/:id' => 'lines#infoLine'
  get 'infoExclusive' => 'lines#infoExclusive'
  get 'infoPro' => 'lines#infoPro'
  get 'infoLikepro' => 'lines#infoLikeAPro'
  get 'subInfoMaterial' => 'home#subInfoMaterials'
  get 'cart' =>'wish_item#shoppingCart' 
  get 'exclusiveMarket/:id' => 'rooms#show'
  get 'proMarket/:id' => 'rooms#show'
  get 'likeProMarket' => 'like_pro#likeProMarket'
  get 'infoFrames' => 'home#infoFrame'
  get 'infoCanvas' => 'home#infoCanvas'
  get 'infoPapers' => 'home#infoPappers'
  get 'infoAcrilics' => 'home#infoAcrilics'
  get 'artist' => 'home#artist'
  get 'pay' => 'payment#pay'
  get 'infoArtist' => 'home#infoArtist'
  get 'infoPrint' => 'home#infoPrintPhotos'
  get 'infoPurchase' => 'home#infoPurchase'
  get 'profile' => 'profile#profile'
  get 'about' => 'home#aboutUs'
  get 'failPurchase' => 'home#purchaseFailed'
  get 'succesPurchase' => 'home#purchaseSucces'
  get 'wishlist' => 'wish_item#index'
  get 'wishItem' => 'wish_item#create'
  get 'upload' => 'like_pro#upload'
  post 'transaction' => 'transactions#create'
  post 'response' => 'transactions#wompi_response'
  get 'result' => 'transactions#result'

  
  devise_for :users, controllers: {sessions: 'users/sessions', registrations: 'users/registrations'}
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  
end
