async function dharmil() // async will return promise, any async function will be returning promise
{
    console.log(`Inside The dharmil Function`);
    const response = await fetch('https://api.github.com/users');
    console.log(`Before Response`);
    const users = await response.json();
    console.log(`Users Fetched`);
    return users;
}

let a = dharmil();
console.log(a);
a.then((data) => console.log(data));