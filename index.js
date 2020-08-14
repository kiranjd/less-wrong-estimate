import { parseArgs } from "./src/utils.js";
import readline from "readline";

console.clear();
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getEstimate({ best, nominal, worst }) {
  return (parseInt(best) + 4 * parseInt(nominal) + parseInt(worst)) / 6;
}

function getDeviation(best, worst) {
  return (parseInt(best) + parseInt(worst)) / 6;
}

const userQueries = [
  { q: "What is the best case estimate(days)? ", a: "best" },
  { q: "What is the nominal(ideal) case estimate? ", a: "nominal" },
  { q: "What is the worse case estimate? ", a: "worst" },
];

rl.question("What is the best case estimate(days)? ", function (best) {
  rl.question("What is the nominal(ideal) case estimate? ", function (nominal) {
    rl.question("What is the worse case estimate? ", function (worst) {
      log(`best: ${best}, nominal: ${nominal}, worst: ${worst}`);
      console.log(
        `\nEstimated time for completion: ${getEstimate({
          best,
          nominal,
          worst,
        })}\nStandard deviation of the estimate: ${getDeviation(best, worst)}`
      );
      rl.close();
    });
  });
});
