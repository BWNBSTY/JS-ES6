// similar as array destructuring
// eg
// let obj = {
//     Name : "Bwn",
//     Age: 21,
//     Gender:"Male"
// }
// let {Name,Age,Gender} = obj;
// console.log(Name);
// console.log(Age);
// console.log(Gender);
//
// variable ka nam change karna ho toh
// eg
// let obj = {
//     Name : "Bwn",
//     Age: 21,
//     Gender:"Male"
// }
// let {Name : userName,Age,Gender} = obj;
// console.log(userName);
//
// default value dena ho toh
// eg
// let obj = {
//     Name : "Bwn",
//     Age: 21,
// }
// let {Name,Age,Gender = "Male"} = obj;
// console.log(Gender);
//
// nested object destructuring
// eg
let obj = {
    Name : "Bwn",
    Age: 21,
    Gender:"Male",
    location : {
        country : "India",
        state : "Assam"
    }
}
let {Name,Age,Gender,location : {country,state}} = obj;
console.log(country);
console.log(state);

