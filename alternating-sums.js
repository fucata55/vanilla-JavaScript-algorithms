//Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
//
//You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
//
//Example
//
//For a = [50, 60, 60, 45, 70], the output should be
//alternatingSums(a) = [180, 105].
//
//Input/Output
//
//[execution time limit] 4 seconds (js)
//
//[input] array.integer a
//
//Guaranteed constraints:
//1 ≤ a.length ≤ 10,
//    45 ≤ a[i] ≤ 100.
//
//[output] array.integer
//
//Best Solution by codedog ranked #2:
//alternatingSums = a => a.reduce((p,v,i) => (p[i&1]+=v,p), [0,0])
//
//My solution:
let alternatingSums = a => {
    let firstNum = 0;
    let secondNum = 0;
    a.map((val, i) => i % 2 === 0 ? firstNum += a[i] : secondNum += a[i])
    return [firstNum, secondNum]
}
