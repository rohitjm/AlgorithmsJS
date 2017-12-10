function fibDynamic(n) {
  
  let fibStore = {};
  
  function internalFib(n) {
    if(n === 1 || n === 2) {
      return 1;
    }
    if(fibStore[n]) {
      console.log(fibStore);
      return fibStore[n];
    } else {
      fibStore[n] = internalFib(n-1) + internalFib(n-2);
      return fibStore[n];
    }
  }

  return internalFib(n);
}

console.log(fibDynamic(7));