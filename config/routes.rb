Rails.application.routes.draw do
  root 'pages#home'
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
end
