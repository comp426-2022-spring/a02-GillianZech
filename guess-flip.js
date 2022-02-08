import { flipACoin } from "./modules/coin.mjs";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Take one argument on the command line named --call that will only accept .
// If no argument is given, or something other than “heads” or “tails” is passed with --call, return an error message (see below for example).
// Compare the call with a flip and report the result to STDOUT (see below)

const args = require('minimist')(process.argv.slice(2));
args['call'];
const call = args.call;

if ((call != "heads" && call != "tails") || call == null) {
    console.log("Error: Input incorrect or not present.\nUsage: node guess-flip --call=[heads|tails]")
} else {
    console.log(flipACoin(call));
}