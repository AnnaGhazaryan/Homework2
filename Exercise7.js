//Exercise 7
console.log("______________Exercise 7");
var a = -476;
var b = 0;
var c = 9;

if (a === 0 || b === 0 || c === 0) {
  console.log("Product sign is undefined")
  } else {
if ((a < 0 && b < 0 && c < 0) ||
    (a < 0 && b > 0 && c > 0) ||
    (a > 0 && b < 0 && c < 0) ||
    (a > 0 && b > 0 && c < 0) ) {
      console.log("Product sign is -")
    } else {
    if ((a < 0 && b > 0 && c < 0) ||
    (a < 0 && b < 0 && c > 0) ||
    (a > 0 && b > 0 && c > 0) ||
    (a > 0 && b < 0 && c < 0) ) {
      console.log("Product sign is +")
    }
    }
}
