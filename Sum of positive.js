function positiveSum(arr) {
  let x = 0;
  for (let i=0;i<arr.length; i++){
    if (arr[i]>0) {
      x += arr[i];
    }
  }
  return (x);
}