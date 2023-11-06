'use strict';
console.log('if else loaded');

// palyginimas
console.log('(5 < 10)', 5 < 10);
console.log('(5 > 10)', 5 > 10);
console.log('(10 > 10)', 10 > 10);
console.log('(10 >= 10)', 10 >= 10);
console.log('(10 == 10)', 10 == 10);
console.log("(10 == '10')", 10 == '10');
// === tikrina ar reiksme ir tipas yra lygus
console.log("(10 === '10')", 10 === '10');
console.log("(10 !== '10')", 10 !== '10');

// if blokas

/*
if (salyga) {
  ivyks jei salyga yra true (truethy)
} else {
  ivyks jei salyga yra false
}
*/
let num1 = 1;
if (typeof num1 !== 'number') {
  console.log('iveskite skaiciu');
} else if (num1 < 10) {
  console.log(`tiesa ${num1} < 10`);
} else if (num1 === 10) {
  console.log(`${num1} yra lygus 10`);
} else {
  console.log(`${num1} nera maziau uz 10`);
}

// paprasyti vartotojo ivesti skaiciu
// patikrinti ar skaicius yra lygus 19
// pranesti su console ar lygu ar ne
