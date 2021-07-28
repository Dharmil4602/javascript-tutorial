const greet = `Hello There`;
const name = `Dharmil`;
console.log(greet + ` ` + name);

let html;

html = `<h1> This Is Inbrowser JavaScript <h1>` + `<p> Hello </p>`;

console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

// Below Is Example Of Template Literals
let fr1 = `Peach`;
let fr2 = `Apple`;
let myHtml = `Hey, My Name Is ${name}
            <h1>Below Are The Fruits That I Like</h1>
            <p>I Like ${fr1} and ${fr2}</p>`;
            document.body.innerHTML = myHtml;