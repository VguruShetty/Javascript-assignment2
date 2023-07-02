// function swapValues(x, y) {
//     [x, y] = [y, x];
//     return [x, y];
//   }

//   let x = 5;
//   let y = 10;
  
//   let swappedValues = swapValues(x, y);
//   console.log(swappedValues);
//   console.log("x =", x);
//   console.log("y =", y);
  
  
function swapNum(X, Y) {
    [X, Y] = [Y, X];
    return [X, Y];
}

let X = 5;
let Y = 10;

let sv =  swapNum(X,Y);
console.log("X =", X);
console.log("Y =", Y);
console.log("[X, Y] =",sv);
