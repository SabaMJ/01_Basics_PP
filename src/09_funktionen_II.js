

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

const ERRPR_STR_DIV = "Teil durch 0 nicht möglich";




const ERROR_STR_GEN = "Irgendwas ging schief!";

const prompt = require('prompt-sync')({sigint: true});

startApp()
function startApp() {
	output(calculator(3,2,"+"));
}

function getNum1() {
	return parseInt(prompt("Zahl1?: "));
}
function getNum2() {
	return parseInt(prompt("Zahl2?: "));
}

function getOp() {
	return prompt("OP?: ");
}


startApp()
function startApp() {
	output(calculator(getNum1(),getNum2(),getOp()));
}





// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));

function calculator(a,b, op)
{
	switch(op){
		case "+": //Addition
			return add(a, b);
		
		case "-": //Subtraktion 
			return subtract(a, b);

		case "*": //Muliplkation 
			return multiply(a,b);

		case "/": //Division
		case ":" :
			return divide(a,b);

		default : 	
		//case ":": //Fehler
			return "Fehler";
	
 	}


}


// module: division a / b |  test:
//output(divide(4,2));
//output(divide(3,2));
//output(divide(3,-2));
//output(divide(0,2));
//output(divide(3,0));
//output(divide(0,0));
 function divide(a,b) 
 {
	if (b == 0){
		return ERRPR_STR_DIV;
	}
		return a/b;
	/*{if (b != 0) {
		return a/b;
	}else{
		return ERRPR_STR_DIV;
	}*/
 }


// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return  a * b;
}



// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a - b;
}


// module: addition a + b |  test:
//output(add(2,2));
// output(add(2,-2));
// output(add(2,0));

function add(a,b)
{
	return a+b ;
}



// module: output | test:
// output("hello");
// output(2);
function output(outputData) 
{
	console.log(outputData);
}
 