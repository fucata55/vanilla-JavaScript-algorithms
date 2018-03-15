//A function that returns the sum of two numbers.
//
//
//Input/Output
//
//[execution time limit] 4 seconds (js)
//
//[input] integer param1
//Guaranteed constraints:
//-100 ≤ param1 ≤ 1000.
//
//[input] integer param2
//Guaranteed constraints:
//-100 ≤ param2 ≤ 1000.
//
//[output] integer
//The sum of the two inputs.
//
//
//My solution:
let add = (param1, param2) => {
    if(-100<=param1<=1000 && -100<=param2<=1000) {
        return param1+param2
    }
    else {
        return false
    }
}
