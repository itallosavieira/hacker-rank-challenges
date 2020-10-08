function simpleArraySum(ar) {
  let result = 0;
  for (let i = 0; i < ar.length; i++){
      result += ar[i];
  };
  console.log(result)
  return result;
};

simpleArraySum([1, 2, 3, 4, 10, 11]);
// 31