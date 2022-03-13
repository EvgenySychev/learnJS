function pillars(num_pill, dist, width) {
  // your code here
  let distnc = (num_pill - 1)*dist*100 + (num_pill-2)*width;
  if (distnc<0){
    distnc=0;
  }
  return (distnc);
}