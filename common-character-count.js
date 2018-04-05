//Given two strings, find the number of common characters between them.
//
//Example
//
//For s1 = "aabcc" and s2 = "adcaa", the output should be
//commonCharacterCount(s1, s2) = 3.
//
//Strings have 3 common characters - 2 "a"s and 1 "c".
//
//Input/Output
//
//[execution time limit] 4 seconds (js)
//
//[input] string s1
//
//A string consisting of lowercase latin letters a-z.
//
//Guaranteed constraints:
//1 ≤ s1.length ≤ 15.
//
//[input] string s2
//
//A string consisting of lowercase latin letters a-z.
//
//Guaranteed constraints:
//1 ≤ s2.length ≤ 15.
//
//[output] integer
//
//Best solution by le_crosst rank#1:
//function commonCharacterCount(s1, s2) {
//    for (var i = 0; i < s1.length; i++) {
//        s2 = s2.replace(s1[i], "!");
//    }
//    return s2.replace(/[^!]/g, "").length;
//}
//
//My Solution:
function commonCharacterCount(s1, s2) {
    let newArr = []
    let b = s2.split('')
    for (let i = 0; i<s1.length; i++) {
        b.includes(s1.charAt(i)) ? (newArr.push(s1.charAt(i)), delete b[b.indexOf(s1.charAt(i))]) : 'woof'
    }
    return newArr.length
}
