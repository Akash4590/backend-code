
var fs =  require("fs");

fs.writeFileSync("Akash.txt","my name is Akash");


var a = 10;
let b = 20;
const c = 30

b= 100;
a = 200;
console.log(a+b+c);

if (a===200){
        console.log("this is if condition");      
}else {
              console.log("this is else condition")
}

function fruit(item){
        console.log("i like fruit" +item);      
}
fruit("mango")