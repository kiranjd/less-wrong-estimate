import readline from "readline";

console.clear();
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function roundNum(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

function getEstimate({ best, likey, worst }) {
  const res = (parseInt(best) + 4 * parseInt(likey) + parseInt(worst)) / 6;

  return roundNum(res);
}

function getDeviation(best, worst) {
  const res = (parseInt(best) + parseInt(worst)) / 6;

  return roundNum(res);
}

const userQueries = [
  { q: "What is the best case estimate(days)? ", a: "best" },
  { q: "What is the nominal(ideal) case estimate? ", a: "nominal" },
  { q: "What is the worse case estimate? ", a: "worst" },
];

rl.question("What is optimistic time(best case) time? ", function (best) {
  rl.question("What is most likely time? ", function (likey) {
    rl.question("What is passimistic time(worst case) time? ", function (
      worst
    ) {
      log(`best: ${best}, likey: ${likey}, worst: ${worst}`);
      console.log(
        `\nEstimated time for completion: ${getEstimate({
          best,
          likey,
          worst,
        })}\nStandard deviation of the estimate: ${getDeviation(best, worst)}`
      );
      rl.close();
    });
  });
});
