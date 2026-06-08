// console.log("Apple1");
// setTimeout(()=>{
// console.log("Apple2");
// },2000)

// console.log("Apple3");

// console.log("Apple1");

// let a= 20;
// let b= 0;
// setTimeout(()=>{
// // console.log("Apple2");
// b=100;
// console.log(a+b);
// },2000)

// // console.log("Apple3");
// console.log(a+b);
const fs = require('fs');

fs.readFile("text/Akash.txt", 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file");
        return;
    }

    console.log(data);
});

console.log("End Script");