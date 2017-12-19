def palindrome?(str)
  for i in 0..str.length/2
    if (str[i] != str[str.length - 1 - i])
      return false
    end
  end
  return true
end

#example of a palindrome: "racecar"
