// array ke value meh variable assign karenge ///////////////////////////////
// eg
// let book = ["Advance JS",456,"INR 600"];
// let [Name,pages,price] = book;
// console.log(price);
// console.log(Name);
// console.log(pages);
//
// undefined hoga ///////////////////////////////////
//eg
// let book = ["Advance JS",456, ,"INR 600"];
// let [Name,pages,publication,price] = book;
// console.log(publication);
//
//default value /////////////////////////////////////
//eg
// let book = ["Advance JS",456, ,"INR 600"];
// let [Name,pages,publication="RKB",price] = book;
// console.log(publication);
//
//nested array destructuring ///////////////////////////
//eg
// let book = ["Advance JS",456,"INR 600",["Bwn","2023"]];
// let [Name,pages,price,[publication,year]] = book;
// console.log(publication);
// console.log(year);
//
//
// eg
function book(){
    return ["Advance JS",499];
}
let [book_tittle,price] = book();
console.log(book_tittle);
console.log(price);

