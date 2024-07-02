
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

// Prompt-Anforderung für die erste Zahl
let ersteZahl = parseFloat(prompt("Geben Sie die erste Zahl ein:"));

// Prompt-Anforderung für die zweite Zahl
let zweiteZahl = parseFloat(prompt("Geben Sie die zweite Zahl ein:"));

// Berechnung der Summe der beiden Zahlen
let summe = ersteZahl + zweiteZahl;

// Ausgabe der Summe in der Konsole
console.log("Die Summe der Zahlen ist: " + summe);