//After they became famous, the CodeBots all decided to move to a new building and live together.
//The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an
//integer that represents the price of the room. Some rooms are free (their cost is 0), but that's
//probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or
//is located anywhere below a free room in the same column is not considered suitable for the bots to live in.
//
//Help the bots calculate the total price of all the rooms that are suitable for them.
//
//Example
//
//For
//matrix = [[0, 1, 1, 2],
//          [0, 5, 0, 0],
//          [2, 0, 3, 3]]
//
//[execution time limit] 4 seconds (js)
//
//[input] array.array.integer matrix
//A 2-dimensional array of integers representing a rectangular matrix of the building.
//
//Guaranteed constraints:
//1 ≤ matrix.length ≤ 5,
//1 ≤ matrix[i].length ≤ 5,
//0 ≤ matrix[i][j] ≤ 10.
//
//[output] integer
//The total price of all the rooms that are suitable for the CodeBots to live in.
//
//
//Best solution from myjinxin2015 rank #1:
//function matrixElementsSum(matrix) {
//    for(var r=0,j=0;j<matrix[0].length;j++){
//        for(var i=0;i<matrix.length;i++){
//            if(matrix[i][j]===0) break
//            else r+=matrix[i][j]
//        }
//    }
//    return r
//}
//
//
//My solution:
function matrixElementsSum(matrix) {
    let total=0;
    for (let j = 0; j<matrix[0].length; j++) {
        for (let i=0; i<matrix.length; i++) {
            if (matrix[i][j]>0) {
                total+=matrix[i][j]
            }
            else {
                break;
            }
        }
    }
    return total
}
