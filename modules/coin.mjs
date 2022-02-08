/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  // var flip = (Math.floor(Math.random() * 2) == 0)
  // if (flip)
  //   return 'heads'
  // else return 'tails'
  return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
  
}
// console.log(coinFlip()) //just for testing

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  let flip_array = [];
  while (flips > 0) {
    flip_array.push(coinFlip());
    flips--;
  }
  return flip_array;
}
// console.log(coinFlips(4));

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: countFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  let head = 0, tail = 0;
  for (let item of array) {
    if (item === "heads".valueOf()) {
      head++;
    }
    else if (item === "tails".valueOf()) {
      tail++;
    }
  }
  return {heads: head, tails: tail};
}
// let array = coinFlips(4);
// console.log(array);
// console.log(countFlips(array));


/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  let flip_result = coinFlip(), win_result = 'lose';
  if (flip_result == call) {
    win_result = 'win'
  }
  return {
    call: call,
    flip: flip_result,
    result: win_result 
  };
}

// console.log(flipACoin('tails'))


/** Export 
 * 
 * Export all of your named functions
*/
export { coinFlip, coinFlips, countFlips, flipACoin };