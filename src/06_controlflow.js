// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
//const ageJohn = 30;
//const ageMark = 30;

// Alles muss man selber machen lassen! ...
const prompt = require('prompt-sync')({sigint: true});
let ageJohn = prompt("ageJohn?: ");
let ageMark = prompt("ageMark?: ");

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
//console.log("ageJohn: " + ageJohn);
//console.log("ageMark: " + ageMark);
 console.log("isJohnOlder: " + isJohnOlder);
 console.log("isJohnEqual: " + isJohnEqual);
 console.log("------------------");


 /************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(true) 
// if(false)
// if(isJohnOlder)
/*if(ageJohn > ageMark)
    {
       console.log("John ist älter.");
    }*/


/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein
if (ageJohn > ageMark)
    {
        console.log("John ist älter. "); //true 
    }
    else
    {
        console.log("Jahn ist jünger. "); //false 
    }