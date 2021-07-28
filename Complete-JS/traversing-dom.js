let cont = document.querySelector(`.container`);
console.log(cont.childNodes); // .childNodes will show elements as well as comments, text, etc
console.log(cont.children); // .children will show only elements.

let nodename = cont.childNodes[1].nodeName;
console.log(nodename); // .nodename will show the name present at particular index of childnode.

// NODE TYPES:
/*
1. 1 is for Element
2. 2 is for Attribute
3. 3 is for Text Node
4. 8 is for Comment
5. 9 is for document
6. 10 is for docType
*/

let nodetype = cont.childNodes[1].nodeType;
console.log(nodetype);

// We Can Get Children Of Children Of Children....
let contai = document.querySelector(`.container`);
// contai = contai.children[1].children[0].children;
contai = contai.firstElementChild;
console.log(contai);