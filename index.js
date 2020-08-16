const minimist = require("minimist");
const { version } = require("./package.json");

function roundNum(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

function getEstimate({ opti, mostly, pessi }) {
  const res = (opti + 4 * mostly + pessi) / 6;

  return roundNum(res);
}

function getDeviation(mostly, pessi) {
  const res = (mostly + pessi) / 6;

  return roundNum(res);
}

module.exports = () => {
  const args = minimist(process.argv.slice(2), {
    alias: {
      h: "help",
      v: "version",
      o: "optimistic",
      m: "most-likely",
      p: "pessimistic",
    },
  });

  try {
    const [opti, mostly, pessi] = [
      parseInt(args.o),
      parseInt(args.m),
      parseInt(args.p),
    ];

    console.log(
      `\nEstimated time for completion: ${getEstimate({
        opti,
        mostly,
        pessi,
      })}\nStandard deviation of the estimate: ${getDeviation(opti, pessi)}`
    );
  } catch (e) {
    console.log(`Invalid arguements`);
  }
};

// #!/usr/bin/env node
// import readline from "readline";

// console.clear();
// const log = console.log;

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const userQueries = [
//   { q: "What is the best case estimate(days)? ", a: "best" },
//   { q: "What is the nominal(ideal) case estimate? ", a: "nominal" },
//   { q: "What is the worse case estimate? ", a: "worst" },
// ];

// rl.question("What is optimistic time(best case) time? ", function (best) {
//   rl.question("What is most likely time? ", function (likey) {
//     rl.question("What is passimistic time(worst case) time? ", function (
//       worst
//     ) {
//       log(`best: ${best}, likey: ${likey}, worst: ${worst}`);
//       console.log(
//         `\nEstimated time for completion: ${getEstimate({
//           best,
//           likey,
//           worst,
//         })}\nStandard deviation of the estimate: ${getDeviation(best, worst)}`
//       );
//       rl.close();
//     });
//   });
// });
