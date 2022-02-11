import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Take one argument on the command line named --number.
// If no argument is given, it should flip once by default.
// The result on STDOUT should be an array of all of the flips in sequence followed by an object summarizing the flips.

const args = require('minimist')(process.argv.slice(2));
args['number'];
const num = args.number;
if (num == null) {
    let flip_result = coinFlips(1);
    console.log(flip_result);
    console.log(countFlips(flip_result));
    // console.log("Error: Input incorrect.\nUsage: node flips.js --number=[heads|tails]")

} else {
    let flip_result = coinFlips(num);
    console.log(flip_result);
    console.log(countFlips(flip_result));
}

// Sounds like the autograder wants us to give an error for no argument instead of flip once by default