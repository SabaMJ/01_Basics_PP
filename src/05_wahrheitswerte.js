
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter
//let year = 2024;
//ageJohn = year - birthYearJohn;
//ageMark = year - birthYearMark;


//Berechnene Alter Iteration 2 
let date = new Date();
let year = date.getFullYear();
console.log("Datum: " + date);
//console.log("Year: " + date.getFullYear());
console.log("Year: " + year);
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);


