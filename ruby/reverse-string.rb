def reverse_string(str)
  for i in 0..str.length/2
    temp = str[i]
    str[i] = str[str.length - 1 - i]
    str[str.length - 1 - i] = temp
  end
end
