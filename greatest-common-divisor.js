function gcd (a, b) {
  // write your code here
 
    // Input positive integers
    a = Math.abs(a);
    b = Math.abs(b);
  
    // LOGIC 
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
  
    return a;
  }


module.exports = gcd
