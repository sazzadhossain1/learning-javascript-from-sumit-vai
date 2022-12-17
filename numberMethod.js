const x = 123;
const y = 456;
const newN = x.toString();
console.log(newN);
console.log(typeof newN);

const toNumber = (x + y).toString();
console.log(toNumber);

const yNumber = y.toString();
console.log(yNumber);

const addNumber = `${newN}${yNumber}`;
console.log(addNumber);
