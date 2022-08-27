/*Crash Course Regular Expressions Part 1: TEST METHOD*/

/*****************************************************************************************************************************/
/*** 1.1: Hello  *************************************************************************************************************/
/*************************LOGIC***********************************************************************************************/
//If Regular expression exists inside of string (TRUE).
//If Regular expression dosen't exist inside of string (FALSE).

//Declaring initial string.
var myString = "Hello, World¡";

//Declaring Regular expression containing word "Hello"
var myRegEx = /Hello/; //THIS IS CASE SENSITIVE.

//Testing myRegEx "Hello" must be inside of string "Hello, World¡". 
var result = myRegEx.test(myString);

/**************************RESULT***************************/
//Result will = true because "Hello" exists in "Hello, World¡"

if (result) {
    console.log("Great job, test Method challenge COMPLETE.");
} else {
    console.log("Try again, test Method challenge FAILED.");
}



/*****************************************************************************************************************************/
/*** 1.2: Waldo  *************************************************************************************************************/
/*************************LOGIC***********************************************************************************************/
//If Regular expression exists inside of string (TRUE).
//If Regular expression dosen't exist inside of string (FALSE).

//Declaring initial string.
var waldoHidding = "Somewhere Waldo is hiding in this text.";

//Declaring Regular expression containing word "Hello"
var waldoRegex = /Waldo/; //THIS IS CASE SENSITIVE.

//Testing myRegEx "Hello" must be inside of string "Hello, World¡". 
var result = waldoRegex.test(waldoHidding);



/*************************RESULT******************************/
//Result will = true because "Hello" exists in "Hello, World¡"

if (result) {
    console.log("Great job, test Method challenge COMPLETE.");
} else {
    console.log("Try again, test Method challenge FAILED.");
}


/*****************************************************************************************************************************/
/*** 1.3: Waldo  ***"dog" or "cat" or "bird" or "fish"**********************************************************************************************************/
/*************************LOGIC***********************************************************************************************/

//If Regular expression exists inside of string (TRUE).
//If Regular expression dosen't exist inside of string (FALSE).

//Declaring initial string.
var petString = "James has a pet cat.";

//Declaring Regular expression containing word "dog", "cat", "bird", "fish"
var petRegEx = / dog|cat|bird|fish /; //THIS IS CASE SENSITIVE.


//Testing myRegEx word "dog" or "cat" or "bird" or "fish" must be inside of string "James has a pet cat.".
var result = myRegEx.test(myString);



/*************************RESULT******************************/
//Result will = true because "Hello" exists in "Hello, World¡"

if (result) {
    console.log("Great job, test Method challenge COMPLETE.");
} else {
    console.log("Try again, test Method challenge FAILED.");
}
