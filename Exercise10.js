//Exercise 10
console.log("______________Exercise 10");
var n = 8664765;
var digit = 4;
var k = 0;

for (n = Math.abs(n); Math.floor(n) !== 0; n = Math.floor(n) /10) {
if (Math.floor(n) % 10 === digit)
{
  console.log("Yes")
  k += 1;
  break;
}
}
(k===0) ? console.log("NO") : "";
