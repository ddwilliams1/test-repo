'use strict';

const assert = require('assert');
const common = require('../common.js');

const { createHistogram } = require('perf_hooks');

const bench = common.createBenchmark(main, {
  n: [1e5],
});

let _histogram;

function main({ n }) {
  const histogram = createHistogram();

  bench.start();
  for (let i = 0; i < n; i++)
    _histogram = structuredClone(histogram);
  bench.end(n);

  // Avoid V8 deadcode (elimination)
  assert.ok(_histogram);
}
