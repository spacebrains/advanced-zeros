module.exports = function getZerosCount(number, base) {
  let factor=primeSearch(base);
  let maxFactor=searchMaxFactor(factor);
  let countZero=0;
  const MAXFACTOR=maxFactor[0];
  while(maxFactor[0]<number){
      countZero+=Math.floor(number/maxFactor[0]);
      maxFactor[0]*=MAXFACTOR;
  }
  return Math.floor(countZero/maxFactor[1]);

}   

function searchMaxFactor(factor){
  let maxFactor=0;
  for(key in factor) 
      if(+key>+maxFactor)
          maxFactor=key; 
  return  [[maxFactor],factor[maxFactor]];
}

function primeSearch(base){
  let primeBase=base;
  let factor={};
  let i;
  while(primeBase!=1){
      for(i=2;primeBase%i!=0;i++);
      if(factor[i]==undefined) factor[i]=1;
      else factor[i]++;     
      primeBase/=i;
  }
  return factor;
}


