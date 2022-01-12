Rails.application.routes.draw do
  mount API::Base, at: "/"
  get 'home/index'
  get 'contacto' => 'home#contacto'
  get 'infoMaterials' => 'home#infoMaterials'
  get 'infoExclusive' => 'home#infoExclusive'
  get 'infoPro' => 'home#infoPro'
  get 'infoLikepro' => 'home#infoLikeAPro'
  get 'subInfoMaterial' => 'home#subInfoMaterials'
  get 'cart' =>'shoppin_cart#shoppingCart' 
  get 'exclusiveMarket' => 'exclusive#exclusiveMarket'
  get 'proMarket' => 'pro#proMarket'
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
  get 'wishlist' => 'profile#sectionWishlist'
  get 'upload' => 'like_pro#upload'

  resources :wompi

  post 'receive' => 'wompi#receive', as: :receive_webhooks
  

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users, controllers: {sessions: 'users/sessions', registrations: 'users/registrations'}
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  
end
