var a = 20;
var b = 10;
var c = "test";
var d = true;
var e = false;
var f = 2;
var g = 3;
var linebreak = "<br />";

// DIALOGUE BOX

// ALERT
function alertBox() {
	alert("this is alert message");
}

// CONFIRMATION BOX
function confiramation() {
	var userresponse = confirm("Do you want to continue ?");
	if (userresponse == true) {
		document.write("User want to continue");
		return true;
	} else {
		document.write("User don't want to continue");
		return false;
	}
}

// PROMPT BOX 
function promptbox() {
	var userName = prompt("what is your Name ?");
	document.write("User name is " + userName);
}


// REDIRECT

// function redirect() {
// 	window.location="http://codepen.io/rahul8992/pen/NxEzEP/"
// }
// document.write("page os redirected with in 10 sec");
// setTimeout('redirect()', '10000');



// FUNCTION

// function hellofunction(name, age) {
// 	document.write(name + " is " + age + " year Old ");
// }

// hellofunction('rahul', 35);

//Function with Return values

// function AddTwoNo(one, two) {
// 	var results = (one + two);
// 	return results;
// }

// function multiply() {
// 	var multi = AddTwoNo(1, 5);
// 	document.write(multi);
// }



//LOOP


//WHILE LOOP

// while( a < 11) {
// 	document.write("current value of a : " + a + "<br />");
// 	a++;
// }


// DO WHILE LOOP

// do {
// 	document.write("current value of a : " + a + "<br />");
// 	a++;
// }
// while(a < 11)


// FOR LOOP

// for (count = 0; count < 20; count++) {
// 	document.write("current count : " + count + "<br/>")
// }


//BREAK

// var x= 5;
// while(x < 20) {	
// 	if (x == 10) {
// 		break;
// 	}
// 	x++;
// 	document.write(x + "<br/>");
// }


//CONTINUE 

// var x= 5;
// while(x < 20) {	
// 	x++;
// 	if (x == 10) {
// 		continue;
// 	}
// 	document.write(x + "<br/>");
// }


//LABELS to Control the Flow

//BREAK

// outerloop:
// for (var i = 0; i < 6; i++) {
// 	document.write("Outerloop:" + i + "<br/>");
// 	innerloop:
// 	for (var j = 0; j < 5; j++) {
// 		if (j > 3) break;
// 		if (i == 2) break innerloop;
// 		if (i == 4) break outerloop;
// 		document.write("innerloop:" + j + "<br/>")
// 	}
// }

//CONTINUE

// outrerloop:
// for (var i = 0; i < 5; i++) {
// 	document.write("Outerloop:" + i + "<br />")
// 	for (var j = 0; j < 4; j++) {
// 		if (j == 3) {
// 			continue outrerloop;
// 		}
// 		document.write("Innerloop: " + j + "<br />");
// 	}
// }



//SWITCH

//Syntax
// switch(expression) {
// 	case condition 1 : 
// 	statement;
// 	break;

// 	case condition 2 :
// 	statement;
// 	break;

// 	case condition n : 
// 	statement;
// 	break;

// 	default : 
// 	statement;
// }

//Example
// document.write("switch condition is : ")
// switch(c) {
// 	case "hello" : document.write("condition 1");
// 	break;

// 	case "hi" : document.write("condition 2");
// 	break;

// 	case "test" : document.write("condition 3");
// 	break;

// 	default : document.write("default condition");
// }



//Conditional Operator 

// function conditional() {
// 	document.write("((a > b) ? 100 : 200) => ")
// 	var results = (a > b) ? 100 : 200;
// 	document.write(results);
// 	document.write(linebreak);

// 	document.write("((a < b) ? 100 : 200) => ")
// 	var results = (a < b) ? 100 : 200;
// 	document.write(results);
// 	document.write(linebreak);
// }

// conditional();



//Arithmetic Operators

// function addition() {
// 	document.write("a + b = ");
// 	var results = a + b;
// 	document.write(results);
// 	document.write(linebreak);
// }

// function substration() {
// 	document.write("a - b = ");
// 	var results = a - b;
// 	document.write(results);
// 	document.write(linebreak);
// }

// function division() {
// 	document.write("a / b = ");
// 	var results = a / b;
// 	document.write(results);
// 	document.write(linebreak);
// }

// function modulus() {
// 	document.write("a % b = ");
// 	var results = a % b;
// 	document.write(results);
// 	document.write(linebreak);
// }

// function addString() {
// 	document.write("a + b + c = ");
// 	var results = a + b + c;
// 	document.write(results);
// 	document.write(linebreak);
// }

// function increment() {
// 	document.write("++a = ");
// 	var results = ++a;
// 	document.write(results);
// 	document.write(linebreak);
// }

// function decrement() {
// 	document.write("--b = ");
// 	var results = --b;
// 	document.write(results);
// 	document.write(linebreak);
// }

// addition();
// substration();
// division();
// modulus();
// addString();
// increment();
// decrement();



//Comparison Operators

// function EqualTo() {
// 	document.write("(a == b) : ");
// 	var results = (a == b);
// 	document.write(results);
// 	document.write(linebreak);
// }

// function NotEqualTo() {
// 	document.write("(a != b) : ");
// 	var results = (a != b);
// 	document.write(results);
// 	document.write(linebreak);
// }

// function Greater() {
// 	document.write("(a > b) : ");
// 	var results = (a > b);
// 	document.write(results);
// 	document.write(linebreak);
// }

// function Less() {
// 	document.write("(a < b) : ");
// 	var results = (a < b);
// 	document.write(results);
// 	document.write(linebreak);
// }

// function GreaterEqual() {
// 	document.write("(a >= b) : ");
// 	var results = (a >= b);
// 	document.write(results);
// 	document.write(linebreak);
// }

// function LessEqual() {
// 	document.write("(a <= b) : ");
// 	var results = (a <= b);
// 	document.write(results);
// 	document.write(linebreak);
// }

// EqualTo();
// NotEqualTo();
// Greater();
// Less();
// GreaterEqual();
// LessEqual();



//Logical Operators 

// function LogicalAND() {
// 	document.write("(d && e) : ");
// 	var results = (d && e);
// 	document.write(results);
// 	document.write(linebreak);
// }

// function LogicalOR() {
// 	document.write("(d || e) : ");
// 	var results = (d || e);
// 	document.write(results);
// 	document.write(linebreak);
// }

// function LogicalNOT() {
// 	document.write("!(d || e) : ");
// 	var results = !(d || e);
// 	document.write(results);
// 	document.write(linebreak);
// }

// LogicalAND();
// LogicalOR();
// LogicalNOT();



//Bitwise Operators

// function BitwiseAND() {
// 	document.write("(f & g) : ");
// 	var results = (f & g);
// 	document.write(results);
// 	document.write(linebreak);
// }

// function BitwiseOR() {
// 	document.write("(f | g) : ");
// 	var results = (f | g);
// 	document.write(results);
// 	document.write(linebreak);
// }

// function BitwiseXOR() {
// 	document.write("(f ^ g) : ");
// 	var results = (f ^ g);
// 	document.write(results);
// 	document.write(linebreak);
// }

// function BitwiseNOT() {
// 	document.write("(~ f) : ");
// 	var results = (~ f);
// 	document.write(results);
// 	document.write(linebreak);
// }

// BitwiseAND();
// BitwiseOR();
// BitwiseXOR();
// BitwiseNOT();



// Assignment Operator

// function SimpleAssignment() {
// 	document.write("value of b is equal to b (b = a) : ");
// 	b = a;
// 	document.write(b);
// 	document.write(linebreak);
// }

// function AddAssignment() {
// 	document.write("value of b is equal to b (a + b) : ");
// 	b += a;
// 	document.write(b);
// 	document.write(linebreak);
// }

// function SubtractAssignment() {
// 	document.write("value of b is equal to b (a - b) : ")
// 	b -= a;
// 	document.write(b);
// 	document.write(linebreak);
// }

// function MultiplyAssignment() {
// 	document.write("value of b is equal to b (a * b) : ")
// 	b *= a;
// 	document.write(b);
// 	document.write(linebreak);
// }

// function DevideAssignment() {
// 	document.write("value of b is equal to b (a / b) : ")
// 	b /= a;
// 	document.write(b);
// 	document.write(linebreak);
// }

// function ModuloAssignment() {
// 	document.write("value of b is equal to b (a % b) : ")
// 	b %= a;
// 	document.write(b);
// 	document.write(linebreak);
// }

// SimpleAssignment();
// AddAssignment();
// SubtractAssignment();
// MultiplyAssignment();
// DevideAssignment();
// ModuloAssignment();