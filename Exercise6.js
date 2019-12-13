//Exercise 6
console.log("______________Exercise 6");
var a = 23;
var b = 87;
var  c = 1;
var max;
var mid;
var min;
//max
if (a>b && a>c) {
  max = a;
  console.log("Max : " + max);
} else {
  if (b>a && b>c) {
    max = b;
  console.log("Max : " + max);
  } else {
    if (c>a && c> b){
      max = c;
  console.log("Max : " + max);
    }
  }
}
//middle
if ((a>b && a<c) || (a<b && a>c) ) {
  mid = a;
  console.log("Mid : " + mid);
} else {
  if ((b>a && b<c) || (b<a && b>c)) {
    mid = b;
  console.log("Mid : " + mid);
  } else {
    if ((c>a && c < b) || (c < a && c > b)) {
      mid = c;
  console.log("Mid : " + mid);
    }
  }
}
//min
if (a < b && a < c) {
  min = a;
  console.log("Min :" + min);
} else {
  if (b < a && b < c) {
    min = b;
  console.log("Min :" + min);
  } else {
    if (c < a && c < b){
      min = c;
  console.log("Min :" + min);
    }
  }
}
