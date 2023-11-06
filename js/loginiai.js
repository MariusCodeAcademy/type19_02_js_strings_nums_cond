console.log('---- Sudėtinės salygos');
console.log('------ And operatorius, loginė sandauga.');
console.log('true && true:', true && true);
console.log('true && false:', true && false);
console.log('false && true:', false && true);
console.log('false && false:', false && false);
console.log('------ OR operatorius, loginė sudėtis.');
console.log('true || true:', true || true);
console.log('true || false:', true || false);
console.log('false || true:', false || true);
console.log('false || false:', false || false);

// Loginiu operatorium patikrtinti ar x yra skaicius IR ar didesnti uz 10

let x = -55;
if (typeof x === 'number' && x > 10) {
  console.log('x yra skaicius ir daugiau uz 10');
}

if (typeof x === 'number') {
  // x yra skaicius
  if (x > 10) {
    // x yra daugiau uz 10
    console.log('x yra skaicius ir daugiau uz 10');
  }
}

// mums tinka jei reikmes yra daugiau uz 50 ARBA maziau uz 0

if (x > 50 || x < 0) {
  console.log('daugiau uz 50 arba maziau uz 0');
}
