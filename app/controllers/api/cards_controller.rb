class Api::CardsController < ApplicationController
  def create
    list = List.find(params[:list_id])
    @card = Card.new(card_params.merge(list: list))

    if @card.save
      # render create
      render :create, status: 201
    else
      # render error
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: 422
    end
  rescue ActiveRecord::RecordNotFound
    # render error
    @error = "Invalid list id provided."
    render 'api/shared/error', status: 404
  end

  def update
    @card = Card.find(params[:id])
    
    if @card.update(card_params)
      render :update, status: 200
    else
      @error = card.errors.full_messages.join(', ')
      render 'api/shared/error', status: 422
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided."
    render 'api/shared/error', status: 404

  end

  private 

  def card_params
    params.require(:card).permit(:title, :list_id, :position, :description, :archived, :due_date, :completed, :labels)
  end
end
