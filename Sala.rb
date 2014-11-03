class Sala
	attr_accessor :name, :capacity, :fixPrice, :variablePrice
	attr_accessor :events
	attr_accessor :all_events

	def initialize (name, capacity, fixPrice, variablePrice)
		@all_events = []
		@events = {}
		@name = name
		@capacity = capacity
		@fixPrice = fixPrice
		@variablePrice = variablePrice
	end

	def getDataSala
		return @name, @capacity, @fixPrice, @variablePrice
	end

	def addEvent(name, description)
		@events[:name] = description
	end

	def getEvent (name)
		@events[name]
	end

	def getAllEvents
		@events
	end
end