

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:

const S = ".";
const Q = "?";
const E = "!";

output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));


function getSentence(arr,op) {
//   let sentence = "";
// //if(arr.length == 0) return "ERROR";
//   // let sentence = arr[0];

//    for (let i = 1; i < arr.length; i++) {
//   //  sentence = sentence + " " + arr[i];

//     if (i == 0) {
//         sentence = arr[0];
//     } else {
//         sentence = sentence + " " + arr[i];
//     }
//    }
   switch (op) {
    case "S":
        return arr.join(" ") + S;
    case "Q":
        return arr.join(" ") + Q;
    case "E":
        return arr.join(" ") + E;
   }
   return "Undefind Opration";
}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}