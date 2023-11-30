// inheritance
// eg
// class emp {
//     constructor (){
//         console.log("class emp called..........");
//     }
// }

// class manager extends emp {
// }

// let manager_1 = new manager();


//
// eg
// class emp {
//     constructor (n){
//         this.Name = n;
//     }
// }

// class manager extends emp {
// }

// let manager_1 = new manager("Biswanath");
// console.log(manager_1);


// super deneh seh parent class ka constructor func call hota hain
// parameter change vi kar sakthe hain child class meh
// eg
// class emp {
//     constructor (n){
//         this.Name = n;
//     }
// }

// class manager extends emp {
//     constructor (nam,d){
//         super(nam);
//         this.department = d;
//     }
// }

// let manager_1 = new manager("Biswanath","Web Development");
// console.log(manager_1);


//
//eg
// class emp {
//     constructor (n){
//         this.Name = n;
//     }
//     msg(){
//         console.log("Hi..........");
//     }
// }

// class manager extends emp {
//     constructor (nam,d){
//         super(nam);
//         this.department = d;
//     }
//     msg(){
//         console.log("Hello..........");
//     }
//     info(){
//         super.msg();
//         this.msg();
//         console.log(`${this.Name} is the manager of department`);
//     }
// }

// let manager_1 = new manager("Biswanath","Web Development");
// console.log(manager_1);
// manager_1.info();


//
// eg
// class emp {
//     constructor (n){
//         this.Name = n;
//     }
//     msg(){
//         console.log("Hi..........");
//     }
// }

// class manager extends emp {
//     constructor (nam,d){
//         super(nam);
//         this.department = d;
//     }
//     msg(){
//         console.log("Hello..........");
//     }
//     info(){
//         super.msg();
//         this.msg();
//         console.log(`${this.Name} is the manager of department`);
//     }
// }

// class admin extends manager{

// }

// let admin_1 = new admin("Bwn","Web Developer");
// console.log(admin_1);


//
// private property in class
// we can access private property only inside class 
// we cant call private property directly
// eg 
// class emp {
//     #Name = "";
//     constructor (n) {
//         this.#Name = n;
//     }
//     getName() {
//         console.log(this.#Name);
//     }
// }

// let emp_1 = new emp("Biswanath");
// console.log(emp_1);
// console.log(emp_1.Name);
// emp_1.getName();


//
// eg
// class emp {
//     #Name = "";
//     constructor (n) {
//         this.#Name = n;
//     }
//     #getName() {
//         console.log(this.#Name);
//     }
//     pubfunc() {
//         this.#getName()
//     }
// }

// let emp_1 = new emp("Biswanath");
// console.log(emp_1);
// emp_1.pubfunc();




// mixin
// dusre object ko class meh mix karna/use karna
// eg
// let usefull_M = {
//     sayHi() {
//         console.log("Hi..........");
//     },
//     sayBye() {
//         console.log("Bye.........");
//     }
// }

// class admin {
//     constructor () {
//         this.Name = "Biswanath";
//     }
// }

// Object.assign(admin.prototype,usefull_M);

// let admin_1 = new admin();
// console.log(admin_1);
// admin_1.sayHi();
// admin_1.sayBye();


//
//
// multiple mixin add kar sakthe hain
// eg
let usefull_M = {
    sayHi() {
        console.log("Hi..........");
    },
    sayBye() {
        console.log("Bye.........");
    }
}

let usefull_M11 = {
    gm() {
        console.log("Good Morning......");
    },
    gn() {
        console.log("Good Night..............");
    }
}

class admin {
    constructor () {
        this.Name = "Biswanath";
    }
}

Object.assign(admin.prototype,usefull_M);

class user extends admin{
}

Object.assign(user.prototype,usefull_M11);

let user_1 = new user();
console.log(user_1);
user_1.sayHi();
user_1.sayBye();
user_1.gm();
user_1.gn();
