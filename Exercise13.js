//Exercise 13
console.log("______________Exercise 13");
var n = -18627282;
var max;
var min;

max = Math.abs(n) % 10;
min = Math.abs(n) % 10;
for (n = Math.abs(n); Math.floor(n) !== 0; n = Math.floor(n) /10) {
 if (Math.floor(n) % 10 >= max)
{
  max = Math.floor(n) % 10;
}
if (Math.floor(n) % 10 <= min)
{
  min = Math.floor(n) % 10;
}
}
console.log("Max :" + max);
console.log("Min :" + min);
console.log("Difference :" +(max-min));
