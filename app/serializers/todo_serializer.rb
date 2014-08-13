class TodoSerializer < ActiveModel::Serializer
	def id
		object.id.to_s
	end

  attributes :id, :title, :is_completed
end
