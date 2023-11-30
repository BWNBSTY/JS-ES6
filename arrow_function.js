// arrow function
// eg
let sum = (...arg) => {
    let sum = 0;
    for(let i=0; i<arg.length; i++){
       sum += arg[i]; 
    }
    console.log(sum);
}

sum(45,45,90,132);

//
// eg
let sumTwo = (a,b) => a+b;
console.log(sumTwo(567,3));


//
// eg
let double = n => 2*n;
console.log(double(80));
