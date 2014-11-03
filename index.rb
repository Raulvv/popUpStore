require 'sinatra'
require 'sinatra/reloader'

set :bind, '0.0.0.0'


get '/' do
	erb :index
end

get '/eventos' do
	erb :eventos
end

get '/contacto' do
	erb :contacto
end

get '/blog' do
	erb :blog
end

get '/nosotros' do
	erb :nosotros
end

get '/espacio' do
	erb :espacio
end