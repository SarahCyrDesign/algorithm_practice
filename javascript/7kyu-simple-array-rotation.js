// function solve(arr) {
//   for (i = 0; i < arr. length; i++) {  //loops through the array
//     if (arr[i] < arr[i+1] && arr[i+1] < arr[i+2]) {
//       return 'A'
//     } else if (arr[i] > arr[i+1] && arr[i+1] > arr[i+2]) {
//       return 'D'
//     } else if (arr[i] > arr[i+1] && arr[i+1] < arr[i+2]) {
//       return 'RA'
//     } else if (arr[i] < arr[i+1] && arr[i+1] > arr[i+2]) {
//       return 'RD'
//     }
//   }
// }

function solve(arr) {
  for (i = 0; i < arr. length; i++) {
    let left = arr[0];
    let right = arr.length - 1;
    let middle = left + (left + right) / 2;

     if (left < right && middle < right) {
      return 'A'
    } else if (left > right && middle > right) {
      return 'D'
    } else if (left > right && middle < right) {
      return 'RA'
    } else if (left < right && middle > right) {
      return 'RD'
    }

  }

  }



//   function solve(arr) {
//   for (i = 0; i < arr. length; i++) {
//   let left = arr[0];
//   let right = arr.length - 1;

//   while (arr[left] > arr[right])
//   let middle = left + (left + right) / 2;

//   {

//     if(arr[middle] > arr[right])
//       {
//         left = middle + 1;
//       }
//       else
//       {
//         right = middle;
//       }
//     }
//       return left;
//   }
  }
