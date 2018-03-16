//Input/Output
//
//[execution time limit] 4 seconds (js)
//
//[input] array.integer inputArray
//An array of integers containing at least two elements.
//Guaranteed constraints:
//2 ≤ inputArray.length ≤ 10,
//-1000 ≤ inputArray[i] ≤ 1000.
//
//[output] integer
//The largest product of adjacent elements.
//
//Best solution by myjinxin2015 rank#1:
//function adjacentElementsProduct(arr) {
//  return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
//}
//
//
//My solution:
let adjacentElementsProduct = inputArray => {
    let highestProduct = -1001;
    for (let i=1; i<inputArray.length; i+=2) {
        if(inputArray[i+1]) {
            if (inputArray[i-1]*inputArray[i]>=inputArray[i+1]*inputArray[i] && inputArray[i-1]*inputArray[i]>highestProduct) {
                highestProduct=inputArray[i-1]*inputArray[i];
            }
            else if (inputArray[i-1]*inputArray[i]<=inputArray[i+1]*inputArray[i] && inputArray[i+1]*inputArray[i]>highestProduct) {
                highestProduct=inputArray[i+1]*inputArray[i];
            }
        }
        else if(!inputArray[i+1] && inputArray[i-1]*inputArray[i]>highestProduct) {
            highestProduct=inputArray[i-1]*inputArray[i];
        }
    }
    return highestProduct
}
