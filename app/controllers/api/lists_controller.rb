class Api::ListsController < ApplicationController

  def create
    board = Board.find(params[:board_id])
    @list = List.new(list_params.merge(board: board))

    if @list.save
      # render create
      render :create, status: :created
    else
      # render error
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: 422
    end
  rescue ActiveRecord::RecordNotFound
    # render error
    @error = "Invalid board id provided."
    render 'api/shared/error', status: 404
  end
  private 

  def list_params
    params.require(:list).permit(:title)
  end
end