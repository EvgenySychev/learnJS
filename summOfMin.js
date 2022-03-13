function sumOfMinimums(arr) {
  // your code here
  let min =0;
  let rezult = 0;
  for (let i=0; i<arr.length; i++){
    min = arr[i].sort().shift();
    rezult += min; 
  }
  return (rezult);
}

function sumOfMinimums(arr) {
  // your code here
  let m =0;
  let rezult = 0;
  for (let i=0; i<arr.length; i++){
    m = Math.min(...arr[i]);
    rezult += m; 
    console.log('min' + m);
    console.log('rezult' + rezult);
    
  }
  return (rezult);
}