let fs = require('fs');
let input = fs.readFileSync('/dev/stin').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    console.log('*');
  }
  console.log('\n');
}
