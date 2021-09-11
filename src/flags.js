const A = 'A'.charCodeAt (0);

const flag = countryCode => (
  String.fromCharCode (55356) +
  String.fromCharCode (56806 + countryCode.charCodeAt (0) - A) +
  String.fromCharCode (55356) +
  String.fromCharCode (56806 + countryCode.charCodeAt (1) - A)
);

console.log (flag ('DE'));
console.log (flag ('NZ'));
console.log (flag ('US'));
