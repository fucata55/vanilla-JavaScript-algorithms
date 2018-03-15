//Given a year, return the century it is in.
//The first century spans from the year 1 up to and including the year 100,
//the second - from the year 101 up to and including the year 200, etc.
//
//Input/Output
//
//[execution time limit] 4 seconds (js)
//
//[input] integer year
//A positive integer, designating the year.
//Guaranteed constraints:
//1 ≤ year ≤ 2005.
//
//[output] integer
//The number of the century the year is in.
//
//
//My solution:
let centuryFromYear = year => {
    let century = 0;
    if (1<=year<=2005) {
        let yearArr = year.toString().split('').map(t => parseInt(t));
        while (yearArr.length<4) {
            yearArr.unshift(0);
        }
        if (yearArr[0]>0) {
            century=yearArr[0]*10;
        }
        if (yearArr[1]>0) {
            century+=yearArr[1];
        }
        if (yearArr[2]> 0 || yearArr[3]> 0) {
            century+=1;
        }
        return century
    }
    else {
        return false
    }
}
