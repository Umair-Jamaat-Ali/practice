//// Dialog Box... practice

function warn() {
    var inputResult = document.getElementById("result");
    confirm("Can you want continue")

    if (inputResult === true) {
        document.write("User want to continue");
        return true
    }
    else{
        document.write("User not want to continue");
        return false
    }
}

//// Objects
 var students = {
    Name : "Saqib",
    Class : "Tenth",
    Teacher : "Mam Sidra",
    RollNo : 2,
 }
 console.log(students);
 document.write("Student name is : " + students.Name + "<br>" );
 document.write( "Teacher Name is : " + students.Teacher  + "<br>");
 document.write("Student Class is : " + students.Class  + "<br>");

 //// Number...

 var maxiNumber = Number.MAX_VALUE;
 console.log(maxiNumber);

 var miniNumber = Number.MIN_VALUE;

 console.log(miniNumber);

 var val = Number.NaN;

 console.log(val);

 var val1 = Number.NEGATIVE_INFINITY;

 console.log(val1);


 var num = 5.45367;


var val2 = num.toExponential(3);
console.log(val2);

var val3 = num.toFixed(2);

console.log(val3);

console.log(typeof num);
 
var val4 = num.toLocaleString
console.log(typeof val4);
   
var num1 = 12;

var val5 = num1.toString(2);

console.log(val5);

console.log(typeof val5);


//// Chptr String

var str = "This is a string";
//// .length is used for check the length of the string
console.log(" Length of this string : " + str.length);

///// charAt() is used to find the character on the index
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));

//// charCodeAt . is used to find the characterstics code what is used in js programming..

console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));
console.log(str.charCodeAt(3));
console.log(str.charCodeAt(4));

//// concat.. is used to join the two strings

var str1 = "This is not string";

var str2 = str.concat( str1 );

console.log(str2);

/// indexOf ... is used for to check the index number of the string...

console.log(str.indexOf("string"));
console.log(str.indexOf("is"));
console.log(str1.indexOf("not"));
//// lastIndexOf... is used for the inverse or reverse find the alphabet
console.log(str2.lastIndexOf("string"));

//// localeCompare... is used for the compare the sentex.. 0 is used for the 100% match. 
/// 1 is used for the 100% not match And -1 is used for the some alphabets are match

console.log(str.localeCompare("ABCD"));
console.log(str.localeCompare("This is a string"));
console.log(str.localeCompare("STRING"));

//// search() is used for the searching something..
var re = /apple/gi



var sentex = "Can you drink the mango juice";

if (sentex.search(re) == -1) {
    document.write("Apple does not contain")
}
else{
    document.write("Apple contain")

};

var rex = /mango/gi

if (sentex.search(rex) == -1) {
    document.write("Mango does not contain " + "<br>")
}
else{
    document.write("Mango contain " + "<br>")

};

//// slice() ka method hum string me kch cheez ko khtm krny k liay istimal krty hain.. is me sara index delete hu jata hy.

var string = "Hi im umair jamaat ali";

console.log(string.slice(4, -2));

//// 