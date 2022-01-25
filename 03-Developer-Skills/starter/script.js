// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Section 5 Skills & Editor set-up
/*

const x = 23;
if (x === 23) console.log(23);
const calcAge = (birthYear) => 2022 - birthYear;

console.log(calcAge(1972));
console.log(calcAge(1973));
console.log(calcAge(1974));
console.log(calcAge("hello"));
console.log(calcAge(1974));

---------------------------

Developer Skills & Editor Setup
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]


function printForecast(arr) {
  //   Go through array
  //   Keep track of index as a day
  let day;
  let msg = "";
  for (let i = 0; i < arr.length; i++) {
    day = i + 1;
    msg = `${arr[i]}°C in ${day === 1 ? "1 day" : day + " days"} ... `;
  }
  return msg;
}

console.log(printForecast([17, 21, 13]));
console.log(printForecast([12, 5, -5, 0, 4]));

// ------------------------------



// 1. The problem: Given an array of forecasted maximum temperatures of one day, calculate the temperature amplitude. There may also be a sebsor malfunction to account for.
// - Temp amplitude = difference between the highest and lowest temps
// - Sensor error - WTF? - string returned show error

// 2. Breaking problem down
// - How to ignore errors?
// - Find max value
// - find min value
// - Subtract min from max (amplitude) and return value

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5, 23];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != "number") continue;

    // if (temps[i] > max) max = temps[i];
    if (curTemp > max) max = curTemp;
    // if (temps[i] < min) min = temps[i];
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitudeNew(temperatures);
const amplitudeNew = calcTempAmplitudeNew(
  [3, 4, 5, 6, 9],
  [9, 10, 8, 3, 2, 9, 6]
);
console.log(amplitude);
console.log(amplitudeNew);

// Problem 2
// 1. Function should now receive 2 arrays of temps
// - When 2 arrays do we implement fuinctionality x 2? NO merge the 2 arrays
// 2. Broken into sub-problems:
// - how to merge the 2 arrays?

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

------------------------------------


// Debugging

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // 4. BUG FIXED - value: prompt - will always return a string - so need to use the NUMBER function
    // value: prompt("Degrees celsius: "),
    value: Number(prompt("Degrees celsius: ")),
  };

  // 2. Identified line below being place to start - start by quering values = value is correct
  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  // 3. Further debugging:
  console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
// 1. Bug identiofied = does not add up the value to 273 but adds it to beginning of string so 1 becomes 1273

// -------------------------------

// using Google debugger:

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5, 23];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != "number") continue;

    // if (temps[i] > max) max = temps[i];
    if (curTemp > max) max = curTemp;
    // if (temps[i] < min) min = temps[i];
    if (curTemp < min) min = curTemp;
  }
  debugger;

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitudeNew(temperatures);
const amplitudeNew = calcTempAmplitudeNew(
  [3, 9, 5, 6, 9],
  [9, 10, 8, 3, 2, 9, 6]
);
console.log(amplitude);
console.log(amplitudeNew);

--------------------------------------------------


// Coding challenge:

Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]

*/

const data1 = [17, 21, 13];
const data2 = [12, 5, -5, 0, 4];
const calcAverage = function (average) {
  return data1 / data1.length;
};

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC`);
console.log(calcAverage);

// const printForecast = function (arr) {
//   let day;
//   let msg = "";
//   let average = Number.calcAverage;
//   for (let i = 0; i < arr.length; i++) {
//     day = i + 1;
//     msg = `${arr[i]}°C in ${
//       day === 1 ? "1 day" : day + " days"
//     } ... The average over this period will be ${average}`;
//   }
//   const calcAverage = function (average) {
//     return average / day.length;
//   };
//   return msg;
// };

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let rep = 0; rep < arr.length; rep++) {
//     // sum = sum + arr[i];
//     sum += arr[rep];
//   }
//   return sum;
// };
// -------------------------

const printForecast = function (arr) {
  let string = "";

  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("... " + string);
};
printForecast(data1);
// console.log(printForecast([12, 5, -5, 0, 4]));

// What is problem?
// - Array transformed to string
// - What is the x days? index + 1

// Break it down
// - Transform Array into string
// - Trandformeach element to string with ºC
// - Strings need to contain day (index +1)
// - Add ... between elements
// - BONUS add the average
