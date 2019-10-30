var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests
suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
.add('String#match', function() {
  !!'Hello World!'.match(/o/);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

// > node sample.js

// RegExp#test x 36,393,697 ops/sec ±2.02% (90 runs sampled)
// String#indexOf x 759,599,158 ops/sec ±3.32% (89 runs sampled)
// String#match x 26,271,054 ops/sec ±3.36% (87 runs sampled)
// Fastest is String#indexOf