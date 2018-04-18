//Given a rectangular matrix of characters, add a border of asterisks(*) to it
//
//Example
//
//For
//
//picture = ["abc",
//"ded"]
//the output should be
//
//addBorder(picture) = ["*****",
//                      "*abc*",
//                      "*ded*",
//                      "*****"]
//Input/Output
//
//[execution time limit] 4 seconds (js)
//
//[input] array.string picture
//
//A non-empty array of non-empty equal-length strings.
//
//Guaranteed constraints:
//1 ≤ picture.length ≤ 100,
//    1 ≤ picture[i].length ≤ 100.
//
//    [output] array.string
//
//The same matrix of characters, framed with a border of asterisks of width 1.
//
//Best solution by Jakzo ranked #1:
//function addBorder(picture) {
//    var width = picture[0].length + 2;
//    return [
//        '*'.repeat(width),
//        ...picture.map(line => `*${line}*`),
//        '*'.repeat(width)
//    ];
//}
//
//My solution:
let addBorder = arr => {
    let theStr = arr.filter(val => val.match(/[A-z]/g))[0]
    arr.map((val,i) => val.match(/[A-z]/g) ? arr[i]='*'+arr[i]+'*' : arr[i]='*'.repeat(theStr.length+2))
    arr.push((() => '*'.repeat(theStr.length+2))())
    arr.unshift((() => '*'.repeat(theStr.length+2))())
    return arr
}
