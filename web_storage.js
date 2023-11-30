// local storage
// eg
// set
localStorage.setItem("Name","Biswanath");
localStorage.setItem("Location","Assam");

// get 
let x = localStorage.getItem("Location");
console.log(x);

// remove
localStorage.removeItem("Name");


// session storage
// eg
sessionStorage.setItem("Name","Bwn");
sessionStorage.setItem("Location","Kokrajhar");

let y = sessionStorage.getItem("Name");
console.log(y);

sessionStorage.removeItem("Location");