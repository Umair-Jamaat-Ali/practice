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


