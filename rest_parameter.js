//suppose sum nam ka function banaya
// usmeh jitna parameter pass karega unsab ko add kareh
function sum(...args){
    let result = 0;
    for(let i=0;i<args.length;i++){
        result += args[i];
    }
    console.log(result);
}
// ismeh ...args jitna parameter milega un sab ko array meh store karega
sum(2,5,4,7); // output will be 18
sum(3,5,20,1,50,100); //output will be 179
