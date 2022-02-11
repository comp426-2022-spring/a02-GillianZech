import { flipACoin } from "./modules/coin.mjs";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Take one argument on the command line named --call that will only accept .
// If no argument is given, or something other than “heads” or “tails” is passed with --call, return an error message (see below for example).
// Compare the call with a flip and report the result to STDOUT (see below)

const args = require('minimist')(process.argv.slice(2));
args['call'];
const call = args.call;

if (call == null) {
    console.log("Error: no input.\nUsage: node guess-flip.js --call=[heads|tails]");
} else if (call != "heads" && call != "tails") {
    console.log("Error: incorrect input.\nUsage: node guess-flip.js --call=[heads|tails]");
} else {
    console.log(flipACoin(call));
}