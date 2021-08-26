class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBook = {};
    }

    getBookList() {
     this.bookList.forEach(element => {
         console.log(element);
     });
    }

    issueBook(bookName, user) {
// this.issuedBook[bookName] = user; // this sentence defines that issuedbook will be displayed on the side of user who has issued it.

if (this.issuedBook[bookName] == null) {
    this.issuedBook[bookName] = user;
    console.log(`${bookName} Has Been Issued To ${user}`);
}

else
{
    console.log(`This Book Has Already Been Issued`);
}

}

    returnBook(bookName, user) {
delete this.issuedBook[bookName]; // this delete operator is used to remove something.

this.returnBook[bookName] = user;
console.log(`${bookName} has been returned by ${user}`);
    }
}