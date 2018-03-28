//Given an array of strings, return another array containing all of its longest strings.
//
//Example
//For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
//allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
//
//Input/Output
//
//[execution time limit] 4 seconds (js)
//
//[input] array.string inputArray
//A non-empty array.
//
//Guaranteed constraints:
//1 ≤ inputArray.length ≤ 10,
//1 ≤ inputArray[i].length ≤ 10.
//
//[output] array.string
//Array of the longest strings, stored in the same order as in the inputArray.
//
//Best solution from xyrn rank #1:
//function allLongestStrings(inputArray) {
//    'use strict';
//    let maxSize = Math.max(...inputArray.map(x => x.length));
//    return inputArray.filter(x => x.length === maxSize);
//}

My solution:
function allLongestStrings(arr) {
    var longest = arr.sort((a, b) =>  b.length - a.length )[0];
    return arr.filter(str => str.length == longest.length)
}
