'use strict';

const common = require('../common.js');
const bench = common.createBenchmark(main, {
  n: [4e5],
});

function main({ n }) {
  let j = 0;

  function cb() {
    j++;
    if (j === n)
      bench.end(n);
  }

  bench.start();
  for (let i = 0; i < n; i++) {
    queueMicrotask(cb);
  }
}
