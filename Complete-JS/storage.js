console.log(`hello`);

// LocalStorage Remains On Permanent Basis

// Adds Value Inside localStorage

localStorage.setItem(`Name`, `Dharmil`);
localStorage.setItem(`Name2`, `Dhruvil`);
// localStorage.clear(); // Clears The Local Storage. After Running This Command, You Cannot Get ANy Item.

// To Remove Any Particular Item From LocalStorage:

// localStorage.removeItem(`Name2`);
// localStorage.removeItem(`Name2`);

// To Retrieve Item From LocalStorage

let str = localStorage.getItem(`Name`);
console.log(str);

// Array Retrieval

let arr = [`Dharmil`, `Shyam`, `Raju`, `Baburao`, `Totlaseth`, `Kachraseth`];
localStorage.setItem(`HeraPheri`, JSON.stringify(arr)); // This Will Convert arr into Array Format In LocalStorage

// By Default, Above As Well As Below Example Will Be Printing Array In Console By Deault.

let n = JSON.parse(localStorage.getItem((`HeraPheri`)));
console.log(n);
console.log(arr);

// sessionStorage Remains On Session Basis

sessionStorage.setItem(`sessionName`, `Dharmil`);
sessionStorage.setItem(`sessionName2`, `Dhruvil`);

