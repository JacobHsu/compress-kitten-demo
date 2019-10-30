var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// 是使用 indexOf 還是 filter 比較快? 
suite
  .add('indexOf', function() {
    var fruits = ['apple', 'orange', 'grape'];
    fruits.indexOf('mango'); // -1
  })
  .add('filter', function() {
    var fruits = ['apple', 'orange', 'grape'];

    fruits.filter(function(value) {
      return value === 'mango';
    });
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true });


//   > node index.js

// indexOf x 793,839,637 ops/sec ±0.71% (93 runs sampled)
// filter x 91,683,759 ops/sec ±2.05% (88 runs sampled)
// Fastest is indexOf

// 測試結果是 indexOf 比較快。

// ref: https://cythilya.github.io/2018/11/03/benchmarking-and-tuning/  