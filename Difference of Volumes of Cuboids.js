function findDifference(a, b) {
  //loading...
  let s1=1;
  let s2=1;
  for (let i=0; i<a.length;i++) {
    s1*=a[i];
  }
  
  for (let j=0; j<b.length;j++) {
    s2*=b[j];
  }
 
  return Math.abs(s1-s2);
}