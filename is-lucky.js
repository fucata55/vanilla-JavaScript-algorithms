//Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
//
//Given a ticket number n, determine if it's lucky or not.
//
//Example
//
//For n = 1230, the output should be
//isLucky(n) = true;
//For n = 239017, the output should be
//isLucky(n) = false.
//Input/Output
//
//[execution time limit] 4 seconds (js)
//
//[input] integer n
//
//A ticket number represented as a positive integer with an even number of digits.
//
//Guaranteed constraints:
//10 ≤ n < 106.
//
//[output] boolean
//
//true if n is a lucky ticket number, false otherwise.
//
//Best solution from myjinxin2015 ranked #6:
//function isLucky(n) {
//    var a=(n+"").split(""),half=a.length/2,l=0,r=0
//    while(a.length>half) r+= +a.pop()
//    while(a.length) l+= +a.pop()
//    return l===r
//}

//My Solution:
function isLucky(n) {
    let firstHalf = 0;
    let lastHalf = 0;
    for (let i=0; i<n.toString().length / 2; i++) {
        firstHalf += parseInt(n.toString()[i])
    }
    for (let i=n.toString().length / 2; i<n.toString().length; i++) {
        lastHalf += parseInt(n.toString()[i])
    }
    return firstHalf === lastHalf
}
