class Api::V1::GreetingsController < ApplicationController
  # before_action :set_greeting

  def index
    @greetings = Greeting.all
    @greeting = @greetings[rand(@greetings.size)]
    render json: @greeting
  end

  private

  def set_greeting
    @greeting = Greeting.find(params[:id])
  end
end
