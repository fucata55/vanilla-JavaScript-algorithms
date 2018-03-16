//Input/Output
//
//[execution time limit] 4 seconds (js)
//
//[input] string inputString
//A non-empty string consisting of lowercase characters.
//Guaranteed constraints:
//1 ≤ inputString.length ≤ 105.
//
//[output] boolean
//true if inputString is a palindrome, false otherwise.
//
//
//Best solution by folsomwg rank#3:
//function checkPalindrome(inputString) {
//    return inputString == inputString.split('').reverse().join('');
//}
//
//
//My solution:
let checkPalindrome = inputString => {
    return inputString.split('').join('') === inputString.split('').reverse().join('');
};
