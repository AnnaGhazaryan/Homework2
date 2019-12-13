//Exercise 8
console.log("______________Exercise 8");
console.log("Given Quadratic equation");
var a = 4;
var b = 20;
var c = 1;
var discriminant;
var x1;
var x2;

if (a === 0) {
  console.log("Enter valid value of a:")
} else {
discriminant = Math.pow(b, 2) - 4*a*c;
if (discriminant < 0) {
  console.log ("No real roots!");
} else {
  if (discriminant === 0) {
    x1 = -b/(2*a);
    console.log("One real root" + x1);
  }
  else {
    if (discriminant > 0) {
      x1 = -b + Math.pow(discriminant, 0.5);
      x2 = -b - Math.pow(discriminant, 0.5);
      console.log ("Two real roots :" + x1 +" and " +x2);
    }
  }
}
}
