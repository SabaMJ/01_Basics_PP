
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsaufruf | call
// test();

/*
// Funktionsrumpf | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Marius!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN
/*
// Call
ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS ...
    let firstName = "Sara";
    console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // Fehler : scope!


*/
/*************Viktor ************/
/*
ausgabeNamen()
function ausgabeNamen() {
    
    let firstName =["Hubert", "sarah","Marius"]
    for (let i = 0; i < firstName.length; i++) {
        const names = firstName[i];
        
        console.log("Hallo,"+names + "!");
    }
}
    */

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2("Arian"); // Argument --> Daten für Parameter
ausgabeNamen2("Maxine");
ausgabeNamen2("Saba");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo, " + firstName + "!");    
}


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenSRP("Max","Mütze");

ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, familyName) {
    console.log("Hallo, " + firstName + " " + familyName + "!");    
}

