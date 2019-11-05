class Api::CommentsController < ApplicationController
  def create
    card = Card.find(params[:card_id])
    @comment = Comment.new(comment_params.merge(card: card))
    # check if a card exists for the provided card_id
    
    if @comment.save
      render :create, status: 201
    else
      @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: 422
    end
    # handle ActiveRecord exception, if needed
    rescue ActiveRecord::RecordNotFound
    # render error
    @error = "Invalid card id provided."
    render 'api/shared/error', status: 404
  end

  private
  
  def comment_params
    params.require(:comment).permit(:text)
  end
end