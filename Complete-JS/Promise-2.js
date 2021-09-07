// Assume the response is coming from server
const students = [
    {name: 'Dharmil', subject: 'JavaScript'},
    {name: 'Souravi', subject: 'Python'}
]

function enrollStudent(student)
{
    return new Promise(function(resolve, reject){
            setTimeout(function() {
            students.push(student);
            console.log(`Students Have Been Enrolled`);
            
            const error = false;
            if (!error) {
                // resolve(getStudents());
                resolve();
            }

            else
            {
                reject();
            }
        }, 1000);
    });
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
        console.log(`Students Have Been Fetched`);
    }, 1000);
}

let newStudent = {name: `Sunny`, subject: `Helio`}
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log(`Error Occured`);
});

// Function Inside then is resolve()
// Function Inside catch is reject()