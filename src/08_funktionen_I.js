
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

// Call
ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS ...
    let firstName = "Sara";
    console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // Fehler : scope!



/*************Viktor ************/
/*
function ausgabeNamen() {
    
    let firstName =["Hubert", "sarah","Marius"]
    for (let i = 0; i < firstName.length; i++) {
        const names = firstName[i];
        
        console.log("Hallo,"+names + "!");
    }
}
    */