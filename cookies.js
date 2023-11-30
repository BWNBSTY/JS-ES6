// cookies dekh neh ke liyeh inspect meh jakeh application meh daba
//
// make cookies
// eg
document.cookie = "item=laptop; expires=wed, 28 Jun 2023 12:00:00:00 UTC";
document.cookie = "cart=shoe";

// delete karna hain toh past date do
// eg
document.cookie = "item=laptop; expires=Mon, 26 Jun 2023 12:00:00:00 UTC";

// read karna hain toh
// eg
let x = document.cookie;
console.log(x);

