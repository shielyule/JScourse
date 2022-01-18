

// 32. Strict mode - write secure JS

'use strict';
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface - 'Audio';
// const private = 534;




// 33. Functions
// A piece of code that can be used over and over

function logger() {
    console.log('My name is Shiel');
}
// Envoking, running, calling the function
logger();
logger();

// Functions are like a machine - put stuff in and get something else out

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
}
fruitProcessor(5, 8);

//parameters - specific to this function (apples, oranges)

const appleJuice = fruitProcessor(5, 8);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(9, 7);
console.log(appleOrangeJuice);

// DRY - don't repeat yourself

const num = Number('23');
console.log(num);


// 34. Function Declarations vs Expressions


function calcAge1(birthYear) {
    // const age = 2022 - birthYear;
    // return age;
    return 2022 - birthYear
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Declaration ^

// Function Expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1 + age2);


// 35. Arrow functions

const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1972);
console.log(age3);

const yearsUnitRetirement = (birthyear, firstName) => {
    const age = 2022 - birthyear;
    const retirement = 67 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUnitRetirement(1972, 'Shiel'));
console.log(yearsUnitRetirement(2010, 'Daisy'));


// 36. Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange!`;
    return juice;
};
console.log(fruitProcessor(2, 1));



// 37. Reviewing Functions

const calcAge = function (birthYear, firstName) {
    return 2022 - birthYear;
}

const yearsUnitRetirement = function (birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirement = 67 - age;
    // return retirement;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already reached retirement age`);
        return 'checkout';
    }
}

console.log(yearsUnitRetirement(1972, 'Shiel'));
console.log(yearsUnitRetirement(2010, 'Daisy'));

---------------------

    function calcAge(birthYear) {
        return 2022 - birthYear;
        // Function declaration - can be used before function is declared
    }
const calcAge = function (birthYear) {
    return 2022 - birthYear;
    // Function expression - a function VALUE stored in a variable
};
const calcAge = birthYear => 2022 - birthYear;
// Arrow function - quick and dirty but not to be used

----------------------------

// Part 2 - Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
2. Usethefunctiontocalculatetheaverageforbothteams
3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
5. Ignoredrawsthistime
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores

--------------------------------

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(20, 3, 1);
let scoreKolas = calcAverage(65, 54, 49);
console.log(scoreKolas, scoreDolphins);

const checkWhoWon = function (avgDolphins, avgKolas) {
    if (avgDolphins >= 2 * avgKolas) {
        console.log(`Dolphins win! (${avgDolphins} vs ${avgKolas})`);
    } else if (avgKolas >= 2 * avgDolphins) {
        console.log(`Kolas win! (${avgKolas} vs ${avgDolphins})`);
    } else {
        console.log(`So tired time to finish!`)
    }
}
checkWhoWon(scoreDolphins, scoreKolas);

checkWhoWon(576, 111);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKolas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKolas);
checkWhoWon(scoreDolphins, scoreKolas);

--------------------------

// 39. Arrays



const friend1 = 'Bill';
const friend2 = 'Paul';
const friend3 = 'Peter';

// data structures  - data from somewhere, process/store, give back = Arrays (and Objects)

const friends = ['Bill', 'Paul', 'Peter'];
// Square brackets = literal syntax
console.log(friends);

const years = new Array(1972, 1973, 1982, 1991);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(years[0]);
// an expression produces a value

console.log(friends.length);
console.log(friends[friends.length - 3]);


friends[2] = 'jay';
console.log(friends[friends.length - 1]);


const firstName = 'Shiel';
const MrYule = [firstName, 'Yule', 2022 - 1972, 'teacher', friends];
console.log(MrYule);


// Exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const year = [1990, 1967, 1972, 2010, 2011];

const age_1 = calcAge(year[2]);
const age_2 = calcAge(year[0]);
const age_3 = calcAge(year[1]);
const age_4 = calcAge(year[3]);
const age_5 = calcAge(year[year.length - 1]);
console.log(age_1, age_2, age_3, age_4, age_5);

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2]), calcAge(year[year.length - 1])];
console.log(ages);

-----------------------



// 40. Basic array operations - Methods

const friends = ['Bill', 'Paul', 'Peter'];

// Add elements to Array
const newLength = friends.push('Jay');
// push will add to end of Array
console.log(friends);
console.log(newLength);

friends.unshift('John');
// unshift will add to beginning of Array
console.log(friends);


// Remove elements from Array
friends.pop();
//pop will remove the last element
const popped = friends.pop();
console.log(popped);
console.log(friends);
console.log(newLength);

friends.shift(); //shift will remove the first element
console.log(friends);

console.log(friends.indexOf('Bill'));
console.log(friends.indexOf('Jay'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Paul'));
console.log(friends.includes('23'));
console.log(friends.includes(23));


if (friends.includes('Paul')) {
    console.log(`You have a friend called ${friends[1]}`)
}



// ------------------------

// 41. Coding Challenge #2

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totalBill = [tip + bills];
console.log(bills, tip);
console.log(`The total bill is ${bills[0]}!`);
console.log(`The tip will be ${tip[0]}`);
console.log(`The total bill including the tip will be ${totalBill[0]}!`);
console.log(totalBill);

// answer:
const totals = [bills[0] + tip[0]];
console.log(bills, tip, totals);
console.log(totals);
console.log(`The total bill including the tip will be ${totals}!`);


// Arrays = data sdtructure to store multiple related values in the same variables ^



------------------------------------------

// 42. Objects - intro

    const shielArray = [
    'Shiel',
    'Yule',
    2022 - 1972,
    'teacher',
    ['Peter', 'Paul', 'Bob']
    // an Array within an Array
    // no way of giving them an name using Array - can only reference by order
];

// using Objects we can give them names:

const shiel = {
    firstName: 'Shiel',
    lastName: 'Yule',
    age: 2022 - 1972,
    job: 'teacher',
    friends: ['Peter', 'Paul', 'Bob']
};

console.log(shiel);


// 43. Objects - Dot vs Bracket notation

const shiel = {
    firstName: 'Shiel',
    lastName: 'Yule',
    age: 2022 - 1972,
    job: 'teacher',
    friends: ['Peter', 'Paul', 'Bob']
};
console.log(shiel);
console.log(shiel.lastName); // Dot notation
console.log(shiel['firsttName']); // bracket notation

const nameKey = 'Name';
console.log(shiel['first' + nameKey]);
console.log(shiel['last' + nameKey]);

// use Dot notation majority of time except in example above

const interestedIn = prompt('What would you like to know about Shiel? firstName, lastName, age, job or friends');
console.log(interestedIn.shiel); // undefined error - Dot does not work
console.log(shiel[interestedIn]); // use Brackets

if (shiel[interestedIn]) {
    console.log(shiel[interestedIn]);
} else {
    console.log('Wrong request - please choose again');
}

shiel.location = 'Scotland';
shiel['twitter'] = '@shielyule';
console.log(shiel);

// challenge
// 'Shiel has 3 friends and his best friend is called Bill'

console.log(`${shiel.firstName} has ${shiel.friends.length} friends, and his best friend is called ${shiel.friends[0]}!`)
---------------------------


// 44. Objects - Methods

// functions are just another value
// can add functions to objects

const shiel = {
    firstName: 'Shiel',
    lastName: 'Yule',
    birthYear: 1972,
    job: 'teacher',
    friends: ['Peter', 'Paul', 'Bob'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;

    // calcAge: function () {
    //     console.log(this);
    //     return 2022 - this.birthYear;

    calcAge: function () {
        //console.log(this);
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, who has ${this.hasDriverLicense ? 'a' : 'no'} drivers license`
    }
};
// console.log(shiel.calcAge());
// console.log(shiel['calcAge'](1991));

console.log(shiel.job);
console.log(shiel.friends);
console.log(shiel.hasDriverLicense);
// console.log(shiel.calcAge(1991));

// challenge

// 'Shiel is a 50 year old teacher, who has a drivers license'

console.log(shiel.getSummary());

---------------------------------


// 45. Coding challenge

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2;
        return this.BMI
    }
};

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2;
        return this.BMI
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

// "John's BMI (28.3) is higher than Mark's (23.9)!"

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName} BMI (${mark.BMI})is higher than ${john.fullName} BMI (${john.BMI})`)
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName} BMI (${john.BMI})is higher than ${mark.fullName} BMI (${mark.BMI})`)
}

-----------------------------


// 46. Iteration - the for loop

for (let rep = 1; rep <= 10; rep++) {
    // 'for' loop keep running while condition is TRUE
    console.log(`Lifting weights is repetitive ${rep} !!!`);
}

-----------------------------------


// 47. Looping Arrys - breaking and continuing

const shiel = [
    'Shiel',
    'Yule',
    2022 - 1972,
    'teacher',
    ['Peter', 'Paul', 'Bob'],
    'Grumpy man',
    true
];
const types = [];

for (let rep = 0; rep < shiel.length; rep++) {
    console.log(shiel[rep], typeof shiel[rep]);
    // console.log(`Here are my credentials: ${shiel[rep]}`);

    // Filling types array
    types[rep] = typeof shiel[rep];
    types.push(typeof shiel[rep]);
}

console.log(types);


const years = [1991, 1972, 2007, 2020];
const age = [];

for (let rep = 0; rep < years.length; rep++) {
    age.push(2022 - years[rep]);
}
// console.log(age);
// console.log(age[1]);

// continue and break
console.log('------- Only STrings =-------');
for (let rep = 0; rep < shiel.length; rep++) {
    if (typeof shiel[rep] !== 'string') continue;

    console.log(shiel[rep], typeof shiel[rep]);
}

console.log('------- BREAK WITH NUMBER =-------');
for (let rep = 0; rep < shiel.length; rep++) {
    if (typeof shiel[rep] === 'number') break;

    console.log(shiel[rep], typeof shiel[rep]);
}

-----------------------------------

// 48. Looping backwards and Loops in loops

const shiel = [
    'Shiel',
    'Yule',
    2022 - 1972,
    'teacher',
    ['Peter', 'Paul', 'Bob'],
    'Grumpy man',
    true
];

for (let rep = shiel.length - 1; rep >= 0; rep--) {
    console.log(shiel[rep]);
}

for (let exercise = 1; exercise < 6; exercise++) {
    console.log(`----------- Starting exercisde ${exercise}`);

    for (let rep = 1; rep < 3; rep++) {
        console.log(`${exercise}  Lifting ARM weights ${rep}`);

        for (let rep = 1; rep < 3; rep++) {
            console.log(`${exercise}  Lifting LEG weights ${rep}`);
        }
    }
}


// 49. While Loop

for (let rep = 1; rep <= 10; rep++) {
    // 'for' loop keep running while condition is TRUE
    // console.log(`Lifting weights is repetitive ${rep} !!!`);
}

// called 'while' loop it will run while a condition is true

let rep = 1;
while (rep <= 10) {
    //  console.log(`WHILE: Lifting weights is repetitive ${rep} !!!`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}!`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`A 6 has been rolled`);
}

--------------------------

// Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉 Bonus:
4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []
const totals = [];

for (let rep = 0; rep < bills.length; rep++) {
    const tip = calcTip(bills[rep]);
    tips.push(tip);
    totals.push(tip + bills[rep]);
}

console.log(bills, tips, totals)

const calcAverage = function (arr) {
    let sum = 0;
    for (let rep = 0; rep < arr.length; rep++) {
        // sum = sum + arr[i];
        sum += arr[rep];
    }
    return sum / arr.length;

}
calcAverage([2, 3, 6]);
console.log(calcAverage(totals));

console.log(`The bill totals were ${bills}, the tips where ${tips}, and the totals ${totals}. The overall AVERAGE number was ${calcAverage(totals)}.`);

-------------------------
*/


