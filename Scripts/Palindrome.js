
function funReverse02(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

//function reverseMe() {
//}

document.getElementById("btnFlip").addEventListener("click", function() {
    let reversed = "";
    var str = document.getElementById("inputBox").value;
    reversed = funReverse02(str);
    document.getElementById("outputBox").innerHTML = reversed;
});

//if (outputWord === reversedWord) {
//    document.getElementById()

//}
//For Loop work space
//    for (let loop = inputWord.length - 1; loop >= 0; loop--) {
//        outputWord += lowerInput.charAt(loop);
//    }
//    document.getElementById("outputWord").innerText = outputWord;
//});

//Identify valid palindrome
//function funReverse01(lowerInput) {
//    let outputWord = lowerInput.split("").reverse().join("");
//    document.getElementById("outputBox").innerHTML = outputWord;
//    return outputWord;
//}
