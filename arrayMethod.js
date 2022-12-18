const names = ["sazzad", "hossain", "tomal"];
const pushMohammad = names.push("Mohammad");
console.log(names);

const popMethod = names.pop();
console.log(names);

const toStr = names.toString(" ");
console.log(toStr);

const toJoin = names.join(" * ");
console.log(toJoin);

const friends = ["Sazzad", "Hossain", "Tomal"];
// friends.splice(1, 1, "Hasain");
// console.log(friends);

friends.splice(2, 1, "AAAAAA");
console.log(friends);

const numberArray = [1, 2, 3, 4, 5, 6, 7, 122, 8, 9, 10];
numberArray.splice(7, 1, "Number Is Gon");
console.log(numberArray);

const fruits = ["Banana", "orange", "Apple", "Mango"];

const conCatArray = fruits.concat(names);
console.log(conCatArray);

const friendsName = ["Sazzad", "Solim", "Anik", "Shohan", "Fahim"];
const sliceMethod = friendsName.slice(0, 2);
console.log(sliceMethod);
