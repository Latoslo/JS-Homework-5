/*================
******Homework on Switch Statements****
* Homework Assignment #5: Switch Statements
Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together. 

The function should accept 4 parameters:

value1, label1, value2, label2

- value1 and value2 should accept positive integers  

- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"

For example your function may be called in any of the following ways:

timeAdder(1,"minute",3,"minutes")

timeAdder(5,"days",25,"hours")

timeAdder(1,"minute",240,"seconds")

Requirements:

1. Your function should include at least one switch

2. Your function must accept any possible combination of inputs 

3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:

return [5,"minutes"]; 

The exact label you choose to return for label3 ("minutes" for example) is up to you.

4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:

timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural

timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types

timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type

Extra Credit:

Rather than returning an arbitrary label for label3, return the largest label that can be used with an integer value

For example if someone calls:

timeAdder(20,"hours",4,"hours")

You could return: [1,"day"] rather than [24,"hours"]

But if they called

timeAdder(20,"hours",5,"hours")

You would return [25,"hours"] because you could not use "days" with an integer value to represent 25 hours.

==================*/

// Define a function expression that takes 4 argurments and returns and array.

const timeAdder = (value1, label1, value2, label2) => {
  // Output arrays
  let result = [];
  let final = [];

  // Make a switch statement for value1 and label1
  // Minutes is the default return label
  switch (label1) {
    case "hours":
      result.push(60 * value1); // convert hours to minutes for value1
      break;
    case "days":
      result.push(24 * 60 * value1); // convert days to minutes for value1
      break;
    case "hour":
      result.push(60); // convert 1 hour to minutes for value1
      break;
    case "day":
      result.push(24 * 60); // convert 1 day to minutes for value1
      break;
    case "minutes":
      result.push(value1);
      break;
    case "seconds":
      result.push(value1 / 60); // convert seconds to minutes for value2
      break;
    default:
      result.push("invalid input");
  }

  // Make a switch statement for value1 and label1
  switch (label2) {
    case "hours":
      result.push(60 * value2); // convert hours to minutes for value2
      break;
    case "days":
      result.push(24 * 60 * value2); // convert days to minutes for value2
      break;
    case "hour":
      result.push(60); // convert 1 hour to minutes for value2
      break;
    case "day":
      result.push(24 * 60); // convert 1 day to minutes for value2
      break;
    case "minutes":
      result.push(value2);
      break;
    case "seconds":
      result.push(value2 / 60); // convert seconds to minutes for value2
      break;
    default:
      result.push("invalid input");
      break;
  }

  // Declare a variable for storage of result of adding value1 & value2.
  let adder = result.reduce((a, b) => a + b);


  // conditions for invalid inputs
  if (
    typeof adder === "string" || // Only default statement is string.
    typeof value1 !== "number" || // value1 & value2 must be type number
    typeof value2 !== "number" ||
    typeof label1 !== "string" || // label1 & label2 must be type string
    typeof label2 !== "string" ||

    // if value1 or value2 is 1 label1 & label2 must be singular and vice versa
    (value1 === 1 &&
      (label1 === "minutes" ||
        label1 === "hours" ||
        label1 === "days" ||
        label1 === "seconds")) ||

    (value1 > 1 &&
      (label1 === "minute" ||
        label1 === "hour" ||
        label1 === "day" ||
        label1 === "second")) ||

    (value2 === 1 &&
      (label2 === "minutes" ||
        label2 === "hours" ||
        label2 === "days" ||
        label2 === "seconds")) ||

    (value2 > 1 &&
      (label2 === "minute" ||
        label2 === "hour" ||
        label2 === "day" ||
        label2 === "second"))

  ) {
    adder = "invalid input";
    final.push(adder);
    final.push("check your input");
  } else if (typeof adder === "number" && adder % (24 * 60) === 0) {
    final.push(adder / (24 * 60));
    final.push("days");
  } else if (typeof adder === "number" && adder % 60 === 0) {
    final.push(adder / 60);
    final.push("hours");
  } else {
    final.push(adder);
    final.push("minutes");
  }
  // write output to console.
  console.log(final);
};

timeAdder(3, "day", 240, "seconds"); // Output: ["invalid input", "check your input"]
timeAdder(3, "days", 240, "seconds"); // Output: [4324, "minutes"]
timeAdder(4, "hours", 240, "seconds"); // Output: [244, "minutes"]
timeAdder(3, "days", 24, "hours"); // Output: [4, "days"]
timeAdder(3, "hhh", 2, "hours"); // Output: ["invalid input", "check your input"]
timeAdder(240, "minutes", 2, "hours"); // Output: [6, "hours"]
timeAdder(true, "minutes", 2, "hours"); // Output: ["invalid input", "check your input"]