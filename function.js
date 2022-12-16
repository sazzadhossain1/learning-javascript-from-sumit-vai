function sleep(name, time) {
  console.log(`${name} is sleeping from ${time} PM`);
  return 4;
}
sleep("Sazzad", 10);
sleep("Shayla", 12);
sleep("Yeasin", 1);
console.log(sleep("ky", 39));

//////////////////////////////////////////////

function myFunction(a, b) {
  return a * b;
}

const x = myFunction(2, 3);
console.log(x);
