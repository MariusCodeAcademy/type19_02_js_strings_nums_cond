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
let numIvestas = 19;
// let numIvestas = +prompt('iveskite skaiciu');
// patikrinti ar skaicius yra lygus 19
console.log('numIvestas ===', numIvestas);
console.log('typeof numIvestas ===', typeof numIvestas);
if (numIvestas === 19) {
  console.log('ivesta 19 all good');
} else {
  console.log('ivesta ne 19 bad');
}
// pranesti su console ar lygu ar ne

// norim atspausdinti koks yra skaicius
// skaicius min gali buti 0
// 0 - 10 - nedidelis skaicius
// 11 - 60 - vidutinis skaicius
// 61 - daugiau - didelis skaicius

// Loginiu operatorium patikrtinti ar x yra skaicius IR ar didesnti uz 10

// mums tinka jei reikmes yra daugiau uz 50 ARBA maziau uz 0
