// https://api.github.com/users: users API

console.log(`Hello`);

let content = document.getElementById(`content`);
// function getData()
// {
//     console.log(`Started getData`);
//    URL = `fetchAPI.txt`;
//     fetch(URL).then((responseTaken) => {
//         console.log(`Taking Response From The Url`)
//    return responseTaken.text();
//     }).then((printData) => {
//         console.log(`Printing The Data Fetched From Url`)
//         console.log(printData);
//     });
// }


// function getData()
// {
//     console.log(`Started getData`);
//    URL = `https://api.github.com/users`;
//     fetch(URL).then((responseTaken) => {
//         console.log(`Taking Response From The Url`)
//    return responseTaken.json();
//     }).then((printData) => {
//         console.log(`Printing The Data Fetched From Url`)
//         console.log(printData);
//     });
// }


function postData()
{
   URL = `https://dummy.restapiexample.com/api/v1/create`;

   let data = `{"name":"Khushi1010","salary":"12546","age":"32"}`
   let params = {
       method: `post`,
       Headers: {
           'Content-Type': `application/json`  
        },
        body: data
   }
    fetch(URL, params).then((responseTaken) => {
   return responseTaken.json();
    }).then((printData) => {
        console.log(printData);
    });
}

// getData();
postData();
