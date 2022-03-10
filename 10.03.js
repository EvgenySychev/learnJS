function powersOfTwo(n){
  let arr = Array();
  //console.log(arr);
  for (let i=0; i<n+1;i++){
    let a = 2**i;
    arr.push(a);
  }
  console.log(arr);
  return arr;
}