class Animal

  def initialize(noise)

@noise = noise

  end


  def make_noise

@noise

  end


  def make_a_lot_of_noise

@noise.upcase

  end

end

 class Cat < Animal

  def make_noise

"purrrrr"

  end

end


puts Cat.new("meaw").make_a_lot_of_noise