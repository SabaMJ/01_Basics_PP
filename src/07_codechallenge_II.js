/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});

// Alles muss man selber machen lassen! ...
const adult = 18 ;
let name = prompt("Name?: ");
let alter = parseFloat(prompt("Alter?: "));

console.log(name + " ist "+ alter + " Jahre alt.");
if (alter > adult)
    {
        console.log(name + " darf alles trinken. "); //true 
    }
    else
    {
        console.log("Jahn ist jünger. "); //false 
    }
