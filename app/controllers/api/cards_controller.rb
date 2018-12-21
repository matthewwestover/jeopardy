class Api::CardsController < ApplicationController
  before_action :set_category
  before_action :set_card, only: [:show, :update, :destroy]

  def index
    render json: @category.cards
  end

  def show
    render json: @card
  end

  def create
    card = @category.cards.new(card_params)
    if card.save
      render json: card
    else
      render json: card.errors
    end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors
    end
  end

  def destroy
    @card.destroy
  end

  private
    def set_category
      @category = Category.find(params[:category_id])
    end

    def set_card
      @card = @category.cards.find(params[:id])
    end

    def card_params
      params.require(:card).permit(:question, :points, :answer1, :answer2, :answer3, :answer4, :correct_answer, :answered)
    end
end
