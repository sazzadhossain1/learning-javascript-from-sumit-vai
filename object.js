const car = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",

  start: function () {
    return "Car has started";
  },
  drive: function () {
    return "Car is driving";
  },
};
console.log(car.start());
