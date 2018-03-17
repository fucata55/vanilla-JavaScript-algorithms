//A 1-interesting polygon is just a square with a side of length 1.
//An n-interesting polygon is obtained by taking the n - 1-interesting
//polygon and appending 1-interesting polygons to its rim, side by side.
//
//
//Input/Output
//
//[execution time limit] 4 seconds (js)
//
//[input] integer n
//Guaranteed constraints:
//1 ≤ n < 104.
//
//[output] integer
//The area of the n-interesting polygon.
//
//Best solution by le_crosst rank#1:
//function shapeArea(n) {
//    return n*n + (n-1)*(n-1);
//}
//
//My solution:
function shapeArea(n) {
    let sides=1+(n-1)*4;
    let angle=0;
    for (let i=3; i<=n; i++) {
        angle+=i-2;
    }
    return sides+angle*4
}
