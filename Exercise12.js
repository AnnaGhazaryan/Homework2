//Exercise 12
console.log("______________Exercise 12")
var type = "rectangle";
var a = 5;
var b = 6;

if (a > 0 && b > 0){
if (type === "triangle"){
  console.log("Triangle :" + (a*b)/2);
} else {
  if (type === "rectangle"){
  console.log("Rectangle :" + (a * b));
}
}
} else {
console.log("Input positive values!");
}
