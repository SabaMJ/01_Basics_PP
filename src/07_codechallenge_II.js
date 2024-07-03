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

switch (alter >= 0)
{
    case (alter < 6) :
        console.log(name + " darf nur Milch trinken. ");
        break;
    case (alter < 13):
        console.log(name + " darf Milch und Saft trinken. ");
        break;
    case (alter < 18) :
        console.log(name + " darf Milch, Saft auch Cola trinken. ");
        break;
    default : //alter als 18
        console.log(name + " darf alles auch Wein trinken. ");
}






/*
if(alter<6){ print ...}
else if (alter < 13) { print ...}
else if (alter < 18) { print ...}  -- switch-case-break 
else {print}  -- default

switch(job){
   case 0:
   case 1:
    print ....
    break;


}


*/
