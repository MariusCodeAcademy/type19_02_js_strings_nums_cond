'use strict';
console.log('nums.js');

let num1 = 4.4;
console.log('num1:', num1);
console.groupCollapsed('floor ceil round');
// floor
console.log('FLOOR------');
console.log('Math.floor(num1):', Math.floor(num1));
console.log('Math.floor(4.99):', Math.floor(4.99));
console.log('Math.floor(-4.01):', Math.floor(-4.01));
// ceil
console.log('CEIL------');
console.log('Math.ceil(num1):', Math.ceil(num1));
console.log('Math.ceil(4.99):', Math.ceil(4.99));
console.log('Math.ceil(4.01):', Math.ceil(4.01));
console.log('Math.ceil(-4.01):', Math.ceil(-4.01));
// round
console.log('ROUND------');
console.log('Math.round(num1):', Math.round(num1));
console.log('Math.round(4.99):', Math.round(4.99));
console.log('Math.round(4.01):', Math.round(4.01));
console.log('Math.round(-4.01):', Math.round(-4.01));
// trunc
console.log('trunc------');
console.log('Math.trunc(num1):', Math.trunc(num1));
console.log('Math.trunc(4.99):', Math.trunc(4.99));
console.log('Math.trunc(4.01):', Math.trunc(4.01));
console.log('Math.trunc(-4.01):', Math.trunc(-4.01));
console.groupEnd();

Math.max(5, 10, -5, 2);
console.log('Math.max(5, 10, -5, 2)', Math.max(5, 10, -5, 2));
console.log('Math.min(5, 10, -5, 2)', Math.min(5, 10, -5, 2));

Math.random(); // 0 iki 0.999999999999999999
console.log('Math.random()', Math.random());
let randUpTo100 = Math.floor(Math.random() * 100) + 1;
console.log('randUpTo100 ===', randUpTo100);

Math.abs(-45); // abs grazina absoliutu(teigiamas) skaiciu
console.log('Math.abs(-45)', Math.abs(-45));
console.log('Math.abs(-15)', Math.abs(-15));
console.log('-15 * -1', -15 * -1);
console.log('Math.abs(145)', Math.abs(145));

console.log('1.2e9', 1.2e9);
console.log('1.2e-9', 1.2e-9);
