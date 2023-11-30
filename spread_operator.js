// ... rest parameter aur spread operator meh kam ata hain
// array meh use hota hain spread operator
// copy karna
//eg
let array1 = [1,3,5];
let array2 = [6,9,7,...array1];
// let array2 = [11,17,...array1,79,21];
let array3 = [...array1,...array2];
console.log(array2);
console.log(array3);
//
// array3 meh array1 ka value aur array2 ka value merge ho gya