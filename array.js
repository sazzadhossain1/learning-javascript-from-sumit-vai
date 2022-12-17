const fruits = ["Banana", "orange", "Apple", "Mango"];
fruits[4] = "Pineapple";
console.log(fruits);

console.log(fruits[fruits.length - 1]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(function (f, i) {
  console.log(f);
});
// <!-- 20 number ta ses -->
