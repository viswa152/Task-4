//How to compare two JSON have the same properties without order?

var obj1 = { name: "Person1", age: 5 };
var obj2 = { age: 5, name: "Person1" };

let isTrue = true;
for (let key in obj1) {
  if (obj1[key] === obj2[key]) {
    continue;
  } else {
    isTrue = false;
    break;
  }
}
console.log(isTrue);
