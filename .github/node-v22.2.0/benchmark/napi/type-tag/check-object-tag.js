'use strict';
const common = require('../../common.js');

let binding;
try {
  binding = require(`./build/${common.buildType}/binding`);
} catch {
  console.error(`${__filename}: Binding failed to load`);
  process.exit(0);
}

const bench = common.createBenchmark(main, {
  n: [1e5, 1e6, 1e7],
});

function main({ n }) {
  binding.checkObjectTag(n, bench, bench.start, bench.end);
}
