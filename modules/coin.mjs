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
  var flip_array = []
  while (flips > 0)
    flip_array.push(coinFlip())
    flips--
  return flip_array
}
// console.log(coinFlips(4))

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
  var flip_count = {
    heads: 0,
    tails: 0
  }
  for (item in array)
    if (item == 'heads')
      flip_count[heads]++
    else if (item == 'tails')
      flip_count[tails]++
  return flip_count
}

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
  var flip_result = coinFlip()
  var win_result = False
  if (flip_result == call)
    win_result = True
  return {
    call: call,
    flip: flip_result,
    result: win_result 
  }
}


/** Export 
 * 
 * Export all of your named functions
*/
export { coinFlip, coinFlips, countFlips, flipACoin };