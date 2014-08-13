class TodosController < ApplicationController
	respond_to :json
	before_action :set_todo, only: [:show, :update, :destroy]

	def index
		respond_with Todo.all
	end

	def show
		respond_with @todo
	end

	def create
		respond_with Todo.create(todo_params)
	end

	def update
		respond_with @todo.update_attributes(todo_params)
	end

	def destroy
		respond_with @todo.destroy
	end

	private
		def todo_params
			params.require(:todo).permit(:title, :is_completed)
		end

		def set_todo
			@todo = Todo.find(params[:id])
		end
end
