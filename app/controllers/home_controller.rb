class HomeController < ApplicationController
  def index
    @colors = Color.all
  end

  def get_votes
    color = Color.find_by_id(params[:id])
    votes = 0

    if color.present?
      color.votes.each { |vote| votes += vote.votes }
    end

    render status: :ok, json: {
      votes: votes
    }
  end
end
