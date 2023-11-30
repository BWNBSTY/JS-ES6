function sum(num1,num2,callback){
    callback();
    console.log(num1+num2);
}

function sayHi(){
    console.log("Hi........");
}

function sayHello(){
    console.log("Hello......")
}

sum(5,8,sayHi);
sum(5,90,sayHello);