//Exercise 4
console.log("______________Exercise 4");
var k = 87545;
var i;
k = k.toString();
i = k.slice(k.length-1,k.length);
console.log(i);
(i == 0) ? console.log(k) : (console.log(k.slice(k.length-1,k.length)+k.slice(0,-1)));
