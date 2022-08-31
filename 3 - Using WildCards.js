/*Crash Course Regular Expressions Part 3: Using WILDCARDS */

// **** /hu./ will look for words including "hu" + " "
// **** Example /hu./ may equal "hum", "hug", "hut", ect...

// **** /.un/ will look for words ending "un"
// **** Example /.un/ may equal "sun", "fun", "run", ect...



/*****************************************************************************************************************************/
/*** 3.1: WILDCARDS using /hu./   ********************************************************************************************/
/*************************LOGIC***********************************************************************************************/
// **** /hu./ will look for words starting with "hu" + " "
// **** Example /hu./ may equal "hum", "hug", "hut", ect...


//Declaring initial string.
var humStr = "I큞l hum a song!";
var hugStr = "Bear hug";

//Declaring Regular expression starting with "hu" CHECKING CASE.
var huRegEx = /hu./; //THIS IGNORES CASES. 

//Testing myRegEx "hu." must be inside of string "I큞l hum a song!".
if (humStr.match(huRegEx).length > 0) {
    alert("Great job, regex  /hu./ is inside string challenge COMPLETE.");
} else {
    console.log("Try again, regex  /hu./ IS NOT inside string challenge FAILED.");
}

//Testing myRegEx "hu." must be inside of string "Bear hug".
if (hugStr.match(huRegEx).length > 0) {
    alert("Great job, regex  /hu./ is inside string challenge COMPLETE.");
} else {
    console.log("Try again, regex  /hu./ IS NOT inside string challenge FAILED.");
}


/*****************************************************************************************************************************/
/*** 3.2: WILDCARDS using /.un/   ********************************************************************************************/
/*************************LOGIC***********************************************************************************************/
// **** /.un/ will look for words starting with "un" + " "
// **** Example /.un/ may equal "sun", "fun", "run", ect...

//Declaring initial string.
var exampletStr = "Let큦 have fun with regular expressions.";

//Declaring Regular expression ending "un"
var unRegEx = /.un/; //THIS IS CASE SENSITIVE.

//Testing myRegEx ".un" must be inside of string "Let큦 have fun with regular expressions.".
var result = extractStr.test(codingRegEx)

//Testing myRegEx ".un" must be inside of string "Let큦 have fun with regular expressions.".
if (result) {
    alert("Great job, regex  /.un/ is inside string challenge COMPLETE.");
} else {
    console.log("Try again, regex  /.un/ IS NOT inside string challenge FAILED.");
}