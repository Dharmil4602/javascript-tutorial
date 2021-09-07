// Promise:
// - resolve
// -reject
// -pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log(`Your Promise Has Been Resolved`);
                resolve();
            }

            else {
                console.log(`Your Promise Has Not Been Resolved`);
                reject(`Sorry Not Resolved`);
            }
        }, 2000);
    });
}

// In below one, resolve is inside then and reject is inside catch
func1().then(function () {
    console.log(`Thanks For Resolving`);
}).catch(function (error) {
    console.log(`Very Bad`, error); // this error is the same that we provide inside reject().
})