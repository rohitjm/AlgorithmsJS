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

// alterate method that doesnt use recursion
function fibDynamic2(n) {
  let fibStore = {};
  fibStore[1] = fibStore[2] = 1;
  
  for(let i = 3; i <= n; i++) {
    fibStore[i] = fibStore[i-1] + fibStore[i-2];
  }
  return fibStore[n];
}

console.log(fibDynamic(7));