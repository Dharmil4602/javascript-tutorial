// Assume the response is coming from server
const students = [
    {name: 'Dharmil', subject: 'JavaScript'},
    {name: 'Souravi', subject: 'Python'}
]

function enrollStudent(student, callBack)
{
    setTimeout(function() {
        students.push(student);
        console.log(`Students Have Been Enrolled`);
        callBack();
    }, 3000);
}

function getStudents()
{
    setTimeout(function() {
        let str = "";
        students.forEach(function(student)
        {
          str += `<li> ${student.name}</li>`
        });
        document.getElementById(`students`).innerHTML = str;
    }, 1000);
}

let newStudent = {name: `Sunny`, subject: `Helio`}
enrollStudent(newStudent, getStudents);