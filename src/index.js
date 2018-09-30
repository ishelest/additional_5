module.exports = function check(str, bracketsConfig) {
  
  let openStack = [];
  let pairIndex;
  
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    if (findConfig(i) && bracketsConfig[pairIndex][0] === str[i]) {
      //check for closing identic bracket case
      let pairIdentic = bracketsConfig[pairIndex][0] === bracketsConfig[pairIndex][1];
      let pairIdenticClosed = openStack[openStack.length - 1] === bracketsConfig[pairIndex][0];
      if (pairIdentic && openStack.length && pairIdenticClosed) {openStack.pop();
        } else openStack.push(str[i]);
      
    } else if (findConfig(i) && bracketsConfig[pairIndex][1] === str[i]) {
        if (openStack.length === 0) return false;
        
        else if (openStack[openStack.length - 1] === bracketsConfig[pairIndex][0]) {
          openStack.pop();
        }
       } else return false;
  }
  return openStack.length == 0;
    
  //find bracket pair in config and change pairIndex
  function findConfig(i) {
    for (let j = 0, cLen = bracketsConfig.length; j <= cLen; j++) {
        //if (i > str.length || !i) break;
        let k = bracketsConfig[j].indexOf(str[i]); 
        if (k >= 0 && str[i] === bracketsConfig[j][k]) {
            pairIndex = j;
            return true;
        } 
    }

  };

};