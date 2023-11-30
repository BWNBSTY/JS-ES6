// object,class,inheritence
// Dry (Don't repeat yourself)
// 
// ES6 seh pehele function constructor use hota tha class ke jaga peh
// Eg of function constructor ///////////////////////////////////////////
// function Person(first,last,a){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;
//     this.fullName = function(){
//         console.log(this.firstName + " " + this.lastName);
//     }
//     this.changeAge = function(newAge){
//         this.age = newAge;
//     }
// }
// let person_1 = new Person("Bwn","Bsty",21);
// let person_2 = new Person("Bill","Gate",59);
// let person_3 = new Person("Elon","Musk",45);
// console.log(person_1);
// console.log(person_2);
// console.log(person_3);
// person_1.fullName();
// person_1.changeAge(23);
//
// object meh jo function hain usko function nhi method bolo ////////////////
//
// object ko yesa vi bana saktha hain ///////////////////
// eg
// let per = new Object();
// per.Name = "Biswanath";
// console.log(per);

//
// prototype inheritence jesa kam kartha hain ////////////////////////////////////////
// method ko prototype ke undar rakho bether than writing again 
// so that dry concept apply
// eg
// function man(first,last,ag){
//     this.first_Name = first;
//     this.last_Name = last;
//     this.age = ag; 
// }
// let man1 = new man("Bwn","Bsty",21);
// let man2 = new man("Biswanath","Basumatary",23);
// console.log(man1);
// console.log(man2);

// man.prototype.full_Name = function(){
//     console.log(this.first_Name + " " + this.last_Name);
// }

// man1.full_Name();
// man2.full_Name();


// iss example meh humneh doh function constructor banaya (Man and Creature) ///////////////////
// doneh ke prototype meh method likha
// aur last meh Man aur Creature ke prototype ko connect kar diya  
// eg
function Creature(nam){
    this.creature_Name = nam; 
}

Creature.prototype.eat = function (){
    console.log("Eating.......");
}

let Creature1 = new Creature("Dog");
let Creature2 = new Creature("Cat");
console.log(Creature1);
console.log(Creature2);

function Man(first,last,ag){
    this.first_Name = first;
    this.last_Name = last;
    this.age = ag; 
}
let man1 = new Man("Bwn","Bsty",21);
let man2 = new Man("Biswanath","Basumatary",23);
console.log(man1);
console.log(man2);

Man.prototype.full_Name = function(){
    console.log(this.first_Name + " " + this.last_Name);
}

man1.full_Name();
man2.full_Name();

Man.prototype.__proto__ = Object.create(Creature.prototype);
man1.eat();






