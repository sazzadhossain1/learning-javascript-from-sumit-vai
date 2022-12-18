const points = [34, 23, 10, 50, 51, 60, 100, 70, 80];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

points.sort(function (a, b) {
  return 0.5 - Math.random();
});
console.log(points);

points.sort(function (a, b) {
  return b - a;
});
console.log(points);
const getLergeNumber = points[0];
console.log(getLergeNumber);

const getLowestNumber = points[points.length - 1];
console.log(getLowestNumber);

const mathMaxNumber = Math.max.apply(null, points);
console.log(mathMaxNumber);

const mathMinNumber = Math.min.apply(null, points);
console.log(mathMinNumber);

const nameArray = ["Sazzad", "Hossain", "Tomal", "Mohammad", "Yeasin"];
const nameArraySort = nameArray.sort(function (a, b) {
  return a - b;
});
console.log(nameArraySort);

// <!-- 23 number ta ses -->
