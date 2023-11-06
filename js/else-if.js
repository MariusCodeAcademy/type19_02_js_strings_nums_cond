'use strict';
console.log('else if loaded');

let sk1 = 70;
// norim atspausdinti koks yra skaicius
// skaicius min gali buti 0
// 0 - 10 - nedidelis skaicius
// 11 - 60 - vidutinis skaicius
// 61 - daugiau - didelis skaicius
console.log('sk1 ===', sk1);
let rezultas;
if (sk1 <= 10) {
  rezultas = 'nedidelis skaicius';
} else if (sk1 <= 60) {
  rezultas = 'vidutinis skaicius';
} else {
  rezultas = 'didelis skaicius';
}

console.log('rezultas:', rezultas);
