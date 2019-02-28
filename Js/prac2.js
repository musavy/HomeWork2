/* (function () {

    console.log('this is the start');

    setTimeout(function cb() {
        console.log('this is a msg from call back');
    });

    console.log('this is just a message');

    setTimeout(function cb1() {
        document.write('this is a msg from call back1');
    }, 0);

    document.write('this is the end');

})(); */

let firstName = "Sayed Masood"; // first name of a person
let lastName = "Musavy"; // last name of a person
// capital city
const country = "Finland"; // country
let age = 28; // age in years
let isMarried = true;
console.log(firstName, lastName, country, age);

let name = "miran";
let nickName = "musavy";
let age1 = 4;
let country1 = "afghanistan";
console.log(name, nickName, age1, country1);

const Name2 = "sahel";
const lastName2 = "musavy";
const country3 = "afghanistan";
const age3 = 1;
console.log(Name2, lastName2, country3, age3);

const gravity = 9.81;
const boilling = 100;
const PI = 3.14;
console.log(gravity, boilling, PI);

let name5 = "masood";
job = "student";
live = "Finland";
console.log(name5, job, live);

const Myage = "28";
const Yourage = "35";
console.log("iam", Myage, "years old");
console.log("your are", Yourage, "old");

const Firstname = "airaj";
const Lastname = "musavy";
const MatrialStatus = "single";
const Country = "Africa";
const language = "javaScript";
const city = "kabul";
const job1 = "student";
const PhoneNo = "0405328277";
const fullName = Firstname + " " + Lastname;
console.log(fullName);

const MyinFo = fullName + "iam" + age + "i live in" + country;
const MyinFo1 = `Iam ${fullName}.I am ${age}. I live in ${country}. ${PhoneNo}`;
const MyinFo2 = ` iam ${fullName}. I live ${city}, ${country}`;
console.log(MyinFo);
console.log(MyinFo1);
console.log(MyinFo2);

const company = "CodingAcademy";
const text =
  "You cannot end a sentence with because because because is a conjunction";
console.log(company);
console.log(company.length);
console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.slice(1));
console.log(company.substr(2));
console.log(company.substring());
console.log(text.substr(30, 25));
console.log(company.includes('Academy'));

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

const num = 50;
const num2 = 60;
const sum = num + num2;
const div = num / num2;
const mul = num * num2;
const diff = num - num2;
const remainder = num % num2;
console.log(sum, div, mul, remainder, diff);

const Pi = 3.14;
const radius = 200;
const gravity1 = 9.18;
const mass = 72;
const boillingPoint = 100;
const bodyTemp = 36;
const areaOfCricle = Pi * radius * radius;
console.log(areaOfCricle);
const weight = mass * gravity1;
console.log(weight);

function masood() {
  const num3 = 10;
  const num4 = 20;
  const my = num3 * num4;
  console.log(my);
}
masood();
function sayedmasood(num3, num4) {
  const my = num3 * num4;
  console.log(my);
}
sayedmasood(10, 20);
function sayedmasoodreturn(num3, num4) {
  const my = num3 * num4;
  return my;
}
console.log(sayedmasoodreturn(10, 20));
function printFullname(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullname("masood", "musavy"));
console.log(printFullname("asma", "nargis"));

function hello() {
  const sum1 = 20;
  const sum2 = 40;
  const hel = sum1 + sum2;
  console.log(hel);
}
hello();
function morsal(sum1, sum2) {
  const hel = sum1 + sum2;
  return hel;
}
morsal(20, 40);
function morsalreturn(sum1, sum2) {
  const hel = sum1 + sum2;
  return hel;
}
console.log(morsalreturn(20, 40));
function prinfullname(firstName, lastName2) {
  return `${firstName} ${lastName2}`;
}
console.log(prinfullname("morsal", "azizi"));
console.log(prinfullname("zuhal", "azizi"));

function world() {
  const num5 = 80;
  const num6 = 40;
  const num7 = num5 - num6;
  console.log(num7);
}
world();
function day(num5, num6) {
  const num7 = num5 - num6;
  return num7;
}
day(20, 40);
function dayreturn(num5, num6) {
  const num7 = num5 - num6;
  return num7;
}
console.log(dayreturn(80, 40));
function printFullname1(firstName, lastName) {
  return ` ${firstName} ${lastName}`;
}
console.log(printFullname1("alina", "setara"));
console.log(printFullname1("nilofar", "tabasum"));

function regtigale(number) {
  return number * number;
}
console.log(regtigale(10));

function myArrayValues(arr) {
  let sum3 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum3 = sum3 + numbers[i];
  }
  return sum3;
}
const numbers = [1, 2, 3, 4, 5];
console.log(myArrayValues(numbers));
