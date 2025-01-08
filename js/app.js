///////////////////////////////////////////  1  M  //////////

// const DigitSum = function (k) {
//     let yigindi = 0;
//     let son = k;

//     if (son < 10) {
//         return son;
//     } else {
//         while (son > 0) {
//             let qoldiq = son % 10;
//             yigindi += qoldiq;
//             son = Math.floor(son / 10);
//         }
//         return yigindi;
//     }
// }

// console.log(DigitSum(321));
// console.log(DigitSum(32));
// console.log(DigitSum(3));




///////////////////////////////////////////  2  M  //////////

function Fib1(n) {
    if (n === 1 || n === 2) {
        return 1; 
    }
    return Fib1(n - 1) + Fib1(n - 2); 
}

console.log(Fib1(5)); 
console.log(Fib1(7));
console.log(Fib1(13));





///////////////////////////////////////////  3  M  //////////

function Fact(n) {
    if (n === 1) {
        return 1; 
    }
    return n * Fact(n - 1); 
}

console.log(Fact(3)); 
console.log(Fact(5));
