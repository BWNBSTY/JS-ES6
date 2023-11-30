// class kese use karthe hain
//
// class meh object ban gaya
// eg
// class person{}
// let person1 = new person();
// console.log(person1);


//
// class ke undar constructor function bana sakthe hain
// eg
// class person{
//     constructor(first,last){
//         this.firstName = first;
//         this.lastName = last;
//     }
// }

// let person1 = new person("Bwn","Bsty");
// console.log(person1);


//
// class meh method banana
//eg
// class person{
//     constructor(first,last){
//         this.firstName = first;
//         this.lastName = last;
//     }
//     fullName(){
//         console.log(this.firstName +" "+ this.lastName);
//     }
// }

// let person1 = new person("Bwn","Bsty");
// console.log(person1);
// person1.fullName();


//
// static method meh deneh seh class nam seh hi call karna partha hain
//eg 
class person{
    constructor(first,last){
        this.firstName = first;
        this.lastName = last;
    }
    fullName(){
        console.log(this.firstName +" "+ this.lastName);
    }
    static sayHello(){
        console.log("Hello...........");
    }
    static job = "Programmer";
}

let person1 = new person("Bwn","Bsty");
console.log(person1);
let person2 = new person("Biswanath","Basumatary");
console.log(person2);
person1.fullName();
person.sayHello();
console.log(person.job);
