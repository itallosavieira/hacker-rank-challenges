function diagonalDifference(arr) {
  let sumDiagonalRighToLeft = 0;
  let sumDiagonalLeftToRight = 0;
  let j = arr.length - 1;

  for(let i = 0; i < arr.length; i++) {
      sumDiagonalRighToLeft += arr[i][i];
      sumDiagonalLeftToRight += arr[i][j];
      j--;
  }

  let result = Math.abs(sumDiagonalRighToLeft - sumDiagonalLeftToRight);
  console.log(result)
  return result;
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
// 15