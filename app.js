// 1. Declare 3 variables in one statement
let userName, userAge, userEmail;

// 2. Declare 5 legal & 5 illegal variable names

// ✅ Legal variable names
let myVar;
let _name;
let $amount;
let firstName;
let user123;

// ❌ Illegal variable names (commented out so code runs)
// let 123user;     // Cannot start with a number
// let my-name;     // Hyphens are not allowed
// let var;         // 'var' is a reserved keyword
// let alert;       // Reserved word
// let user name;   // Spaces are not allowed

// 3. Display naming rules in browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords");
