// GENERATE PHONE NUMBER

// is num an array or not
// if it is an array we probably want to join it
// 3-3-4
// join takes an arguement (I want to join it by nothing so enter (''))
// if its an array I know we need to do .join
// if its regex we're doing .replace
// replace takes 2 parameters, first is what I'm looking to replace, 2nd is what i'm replacing it with
// (regex, replaceWith)
// return num.join.replace and something

// regex for 10 digit phone number : 


// else is exactly the same thing, but it doesn't need to be joined, just return everything into a string
// return nums.toString().replace(regex,replacewith)

// after we're joining the nums array, it's no longer an array, it's a string
// and we're replacing that string with the 2nd value of replace paramters. the 1st is search value, and the new value.
// the first paramater of replace is like a condition that I'm looking for, and the 2nd one is what I'm replacing it with.


const generatePhoneNumber = nums => {
  if (Array.isArray(nums)) {
    return nums.join('').replace(/^(\d{3})(\d{3})(\d{4})$/ , `$1-$2-$3`) // if statement is for 1st test case in test.js [3, 2, 1, 2, 3, 4, 5, 4, 5, 4]
  } else {
    return nums.toString().replace(/^(\d{3})(\d{3})(\d{4})$/ , `$1-$2-$3`) // the else statement is for the 2nd test case in test.js [8885653421]
  }
}
// 
module.exports = generatePhoneNumber

// 1st paramater 

// /^(\d{3})(\d{3})(\d{4})$/


//  ^^ this is saying group 3 numbers that match from 0-9, group 3 numbers that match from 0-9, group 4 numbers that match from 0-9.

// d is saying any number that matches  0-9
// numbers in {} represent the grouping of the numbers 

//  the / just tells us that it's regex
//  the ^ says that the pattern must start from the start (go from the start and not skip)
//  the $ says to the end (from the ^start to the $end I want you to take all the numbers and group them by 3-3-4)


// 2nd paramater
// "$1-$2-$3"

