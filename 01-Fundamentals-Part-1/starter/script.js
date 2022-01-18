/*
let js = "amazing";
if (js === "amazing") alert("you ate my crisps how could you");

40 + 8 + 23 - 10
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);

let lastName = "Buckly"

console.log(firstName, lastName)

let myFirstJob = "Programmer";
let myCurrentJob = "Manager";

console.log("What is your job")
console.log('My current job is ', myCurrentJob, "my last job was ", myFirstJob)


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jones");

javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1972;
console.log(typeof year);




let age = 47;
age = 47;

const birthYear = 1972;


const now = 2037

console.log



const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(ageJones, ageSarah);

console.log(ageJones * 2, ageJones / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jones";
const lastName = "Schmitt";
console.log(firstName + ' ' + lastName);

let x = 10 + 5 // 15
x += 10; // x = x + 10 = 25
x += 4; // x = x * 4 = 100
x++; x = x + 1
x--;
console.log(x);




const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJones + ageSarah) / 2
console.log(ageJones, ageSarah, averageAge);

--------------------------

// Coding challenge #1:

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


const massMark = 95
const heightMark = 1.98
const massJohn = 85
const heightJohn = 1.76

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const highestBMI = bmiMark > bmiJohn;

console.log("Mark", bmiMark, "John", bmiJohn, "Is Mark's BMI higher than John's?", highestBMI);


------------------------------------


const firstName = 'Shiel';
const job = 'teacher';
const birthYear = 1991;
const year = 2022;

const Shiel = "I am " + firstName + ' I am a ' + job + '! I am ' + (year - birthYear) + ' years old!';

console.log(Shiel);

----------------------

const firstName = 'Shiel';
const job = 'teacher';
const birthYear = 1991;
const year = 2022;

const Shiel = "I am " + firstName + ' I am a ' + job + '! I am ' + (year - birthYear) + ' years old!';

console.log(Shiel);

const ShielNew = `I am ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(ShielNew);

// using backtick character ^ "template literals or strings"

console.log('String with \n\
multilple \n\
lines');

console.log(`String with
multilple
lines
but no symbol`);

-----------------------------

let age = 15;
if (age >= 18) {
    console.log(`Sarah can start driving`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

age = 21
if (age >= 18) {
    console.log(`Sarah can start driving`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1988

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



// Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement

const massMark = 95
const heightMark = 1.98
const massJohn = 85
const heightJohn = 1.76

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const highestBMI = bmiMark > bmiJohn;

console.log("Mark", bmiMark, "John", bmiJohn, "Is Mark's BMI higher than John's?", highestBMI);



const massMark = 95
const heightMark = 1.98
const massJohn = 85
const heightJohn = 1.76

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const highestBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn);
console.log('Is Marks BMI higher than Johns? ' + highestBMI);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}



console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Shiel'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0
if (money) {
    console.log('Do not spent it all');
} else {
    console.log('Get a job');
}

let height = 1.65;
if (height) {
    console.log('Yay defined');
} else {
    console.log('Height is Undefined');
}
-----------------------

const age = '18'
if (age === 18)
    console.log('You are an adult (strict)');

if (age == 18)
    console.log('You are an adult (loose)');

const favourite = Number(prompt("What is your favourite number between one and five?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 1) {
    console.log('Cool 1 is cool number');
} else if (favourite === 2) {
    console.log('2 is cool too');
} else if (favourite === 5) {
    console.log('5 is cool too');
} else if (favourite === 3) {
    console.log('3 is cool too');
} else if (favourite === 4) {
    console.log('4 is cool too');
} else {
    console.log('The number was not between 1 and 5. Sorry!')
}

if (favourite != 1)
    console.log('Why not a number between 1 to 5?');



const hasDriversLicense = true; // A
const hasGoodVision = true; // B

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is OK to drive');
} else {
    console.log('Someone else should drive');
}

// && is and
// || is or
// ! is NOT

-------------------------------------

// Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition, and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

---------------------

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKolas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKolas);

if (scoreDolphins > scoreKolas && scoreDolphins >= 100) {
    console.log('Dolphins win');
} else if (scoreKolas > scoreDolphins && scoreKolas >= 100) {
    console.log('Kolas win');
} else if (scoreKolas === scoreDolphins && scoreKolas >= 100 && scoreDolphins >= 100) {
    console.log('Everyone wins');
} else {
    console.log('No one wins');
}

-------------------------

// 26. switch statement

let day = 'monday';

switch (day) {
    case 'monday': // same as day === 'monday'
        console.log('plan structure');
        console.log('Coding meetup');
        break; // need to have break or code will just run through each one
    case 'tuesday':
        console.log('Prep videos');
        break;
    case 'wednesday':
        console.log('Code examples');
        break;
    case 'thursday':
        console.log('more code examples');
        break;
    case 'friday':
    case 'saturday':
        console.log('Days off');
        break;
    case 'sunday':
        console.log('Finally a day off');
        break;
    default:
        console.log('Not a valid day');

}

day = 'sunday'
day = 'monday'
day = 'tuesday'
day = 'wednesday'
day = 'friday'

// ^ can be done with if/else as well


-----------------------------

// 27. Statemensts & Expressions

3 + 4
1991
true && false && !false

if (23 > 10) {
    let str = '23 is bigger';
}

// expressions are like values and statements are like actions programme to perform

const me = 'Shiel';
const children = '3'
let gender = 'man'
console.log(`I am ${2022 - 1972} year old ${gender} with ${children} children`);


// 28. Conditional Ternary Operator

const age = 17;
age >= 18 ? console.log('I like to drink wine') : console.log('i like to drink water');

const drink = age >= 18 ? 'wine' : 'water';  // Ternary Operator
console.log(drink);

// expression creates a value - that can be stored in a variable

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'} `);

---------------------

// Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300



const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip will be ${tip}, and the grand total will be ${bill + tip}`);

*/