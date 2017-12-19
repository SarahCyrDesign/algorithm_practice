def find_repeated_num(array)
  new_hash = Hash.new(0)

  array.each do |value|
    new_hash[value] += 1
  end

  num = nil
  rep = 0
  new_hash.each do |key, value|
    if (value > rep)
      num = key
      rep = value
    end
  end
  return num
end
