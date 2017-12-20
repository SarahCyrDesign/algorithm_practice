function solve(arr) {
  var index0 = 0;
  var index1 = 0;

  for(i = 1; i < arr.length; i++) {

    if(arr[i] > arr[index1]) {
    index1 = i;
  }

    if(arr[i] < arr[index0]) {
      index0 = i;
    }
  }

  if(index1 == 0 && index0 == arr.length - 1) {
    return "D";
  } else if(index1 == arr.length - 1 && index0 == 0) {
    return "A";
  } else if(index0 > index1) {
    return "RA";
  } else if(index1 > index0){
   return "RD";
  }
}

//start each index at 0
//loop through the array
//if the current index is more than index[1] assign index[1] to the current index
//if the current index is less than index[0] assign index[0] to the current index
//compare index[0] and index[1] to determine if the array elements are ascending, descending , rotated ascending or rotated descending in their positions
