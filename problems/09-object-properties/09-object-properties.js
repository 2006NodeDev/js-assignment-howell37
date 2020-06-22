/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
  for (key in someObj) {
    console.log(`${key}: ${someObj[key]}`);
  }
}

function student(studentId, studentName, studentGrade) {
  this.studentId = studentId;
  this.studentName = studentName;
  this.studentGrade = studentGrade;
}

let howell = new student("1234", "jaboa howell", "12");

objectProperties(howell);
