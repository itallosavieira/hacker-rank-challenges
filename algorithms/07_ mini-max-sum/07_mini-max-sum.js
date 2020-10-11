let numbers = [1, 2, 3, 4, 5];

function miniMaxSum(arr){
  const sum = arr.reduce((acc, cur) => acc + cur);

  const minSum = sum - Math.max(...arr);
  const maxSum = sum - Math.min(...arr);

  console.log(minSum, maxSum);
}

miniMaxSum(numbers);
// 10 14