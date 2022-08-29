/*Crash Course Regular Expressions Part 1: TEST METHOD*/

// **** /change/  = STRICTLY EQUALS = CASE SENSITIVE
// **** /change/i = LOSELY EQUALS   = IGNORES CASE

// **** /change/ = checks if it exists
// **** /change/g = all instances



/*****************************************************************************************************************************/
/*** 1.1: (      I  FLAG     ) ***********************************************************************************************/
/*************************LOGIC***********************************************************************************************/
//The I is added after the last slash.
//I stands for ignore Case.

//Declaring initial string.
var myString = "freeCodeCamp";

//Declaring Regular expression containing word "freecodecamp" NOT CHECKING CASE.
var fccRegEx = /freecodecamp/i; //THIS IGNORES CASES. 

//Testing myRegEx "freecodecamp" must be inside of string "freeCodeCamp".
var result = fccRegEx.test(myString);

/**************************RESULT***************************/
//Result will = true because "freecodecamp" exists in "freeCodeCamp"

if (result) {
    console.log("Great job, test Method challenge COMPLETE.");
} else {
    console.log("Try again, test Method challenge FAILED.");
}


/*****************************************************************************************************************************/
/*** 1.2: match METHOD  ******************************************************************************************************/
/*************************LOGIC***********************************************************************************************/
//If Regular expression MATCH in string returns the value of match found in string.
//Returns array with found matchs. 

//Declaring initial string.
var extractStr = "Extract the word 'coding' from this string.";

//Declaring Regular expression containing word "coding"
var codingRegEx = /coding/; //THIS IS CASE SENSITIVE.

//Testing myRegEx "coding" must be inside of string "Extract the word 'coding' from this string.".
var result = extractStr.match(codingRegEx)

/**************************RESULT***************************/
//Result will = true because "Hello" exists in "Hello, World¡"

if (result) {
    console.log("Great job, test Method challenge COMPLETE.");
} else {
    console.log("Try again, test Method challenge FAILED.");
}



/*****************************************************************************************************************************/
/*** 1.3: (      G FLAG        ) *********************************************************************************************/
/*************************LOGIC***********************************************************************************************/
//The G is added after the last slash.
//G FLAG = Global

//Declaring initial string.
var testStr = "Repeat, repeat, REPEAT"

//Declaring Regular expression containing word "repeat" GET ALL GLOBAL INSTANCES
var ourRegEx = "/repeat/g"

//Testing myRegEx "repeat" must be inside of string "Repeat, repeat, REPEAT".
var result = testStr.match(ourRegEx);

/**************************RESULT***************************/
//Result will be [ "repeat" ]

if (result) {
    console.log("Great job, test Method challenge COMPLETE.");
} else {
    console.log("Try again, test Method challenge FAILED.");
}



/*****************************************************************************************************************************/
/*** 1.4: (   I FLAG + G FLAG        ) ***************************************************************************************/
/*************************LOGIC***********************************************************************************************/
//The I is added after the last slash.
//I stands for ignore Case.

//The G is added after the last slash.
//G FLAG = Global

//Declaring initial string.
var twinkleStr = "Twinkle, twinkle, little Star"

//Declaring Regular expression containing word "twinkle" NOT CHECKING CASE AND GETTING ALL GLOBALS
var starRegEx = "/twinkle/ig" 

//Testing myRegEx "twinkle" must be inside of string "Extract the word 'coding' from this string.".
var result = twinkleStr.match(starRegEx);

/**************************RESULT***************************/
//Result will be [ "Twinkle" , "twinkle"]

if (result) {
    console.log("Great job, test Method challenge COMPLETE.");
} else {
    console.log("Try again, test Method challenge FAILED.");
}