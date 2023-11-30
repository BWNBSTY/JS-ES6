// JSON
// Javascript Object Notation
// is a text format for storing and transporting data
// commonly used for API and config files


// JSON file bananeh ke liyeh .json use karo
// we cant use single quatation
// json object ke jesa hota hain
// key ko vi double quatation meh rakho


// how to parse/access json
// eg
let one = `{
    "Name" : "Biswanath",
    "Age" : 21,
    "is_student" : true,
    "passport_num" : null,
    "pro_lang" : ["javascript","c","python","java","c++"],
    "address" : {
        "town" : "kokrajhar",
        "state": "assam",
        "country":"india",
        "pin" : 783346
    }
}`

let data = JSON.parse(one);
console.log(data);
console.log(data["Name"]);
console.log(data["Age"]);
console.log(data["is_student"]);
console.log(data["passport_num"]);
console.log(data["pro_lang"][0]);
console.log(data["address"]["country"]);



// JSON stringify
let student = {
    Name : "Bwn",
    Age : 21,
    Address : "India"
}

let x = JSON.stringify(student);
console.log(x);


