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
   