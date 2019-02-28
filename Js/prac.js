var a = 10;
var b = 20;
var c = a + b;

if (a > b) {
  document.write("yo man its true");
} else if (a == b) {
  document.write("hey you this is equal");
} else {
  document.write("yo man its not true");
}
switch (b) {
  case 10:
    document.write("it is 10 no");
    break;
  case 20:
    document.write("its no 20.case");
    break;
}
var count = 5;

do {
  document.write("masood musavy <br></br>");
  count++;
} while (count < 10);
{
}

for (var i = 0; i < count; i++) {
  document.write("miran <br></br>");
}

var arrays = new Array("masood", "jan", "chetori"); //array
/* arrays[0] = "masood";
arrays[1] = "jan";
arrays[2] = "chetori"; */
document.write(arrays[2]);

var alpha = ["a", "b", "c"]; //concat operater
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
document.write("alphaNumeric:" + alphaNumeric);

var emp = new Array(5);
emp[0] = "java";
emp[1] = "Iphone";
emp[2] = "Android";
emp[3] = "PHP";
emp.pop();
document.write(emp[0]);
document.write("<br/>");
document.write(emp[1]);
document.write("<br/>");
document.write(emp[2]);
document.write("<br/>");
document.write(emp[3]);

function sum(a, b) {
  /*   var a = 20;
  var b = 30; */
  var c = a + b;
  document.write(c);
}
sum(50, 50);
document.write("<br/>")



/* var str = "masood";
var answer = str.charCodeAt('z'); //length //charAt // indexof //includes showing as that letter is n the list
document.write(answer); */

/* 
var str = new string("masood khan");
var answer = str.localeCompare("kha");
document.write("masood khan:" + answer); */
function myfun() {
    document.write("welcome masood");
}



function cal() {
    document.example.answer.value =
        eval(document.example.calculator.value)
}

function foo(b) {
    var a = 10;
    return a + b + 11;
}

function bar(x) {
    var y = 4;
    return foo(x * y);

}
prompt("hello my name is masood"+ "");
document.write(bar(8));

/* 
 while (queue.waitFormMessage()) {
    queue.processNextMessage();
} 

const s = new Data().getSeconds();
setTimeout(function () {
    document.write("Ran after" + (new Data().getSeconds() - s + "seconds");     
}, 500);
while (ture) {
    if (new Data().getSeconds() - s >= 2) {
        document.write("good,looped for 2 seconds");
        break;
    }
}
 


var materials = [
  'Hydrogen',
  'Miran',
  'Lithium',
  'masood'
]; */
/* console.log(materials.map(material => material.length)); */




