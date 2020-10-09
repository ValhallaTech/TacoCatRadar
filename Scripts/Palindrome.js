
function magicReverse(lowerInput) {
    let outputWord = lowerInput.split("").reverse().join("");
    document.getElementById("outputBox").innerHTML = outputWord;
    return outputWord;
}

document.getElementById("btnFlip").addEventListener("click", function() {
    let inputWord = document.getElementById("inputBox").value;
    let outputWord = inputWord.toLowerCase();
    let reversedWord = magicReverse(outputWord);
});

if (outputWord === reversedWord) {
    document.getElementById()
    
}

//For Loop work space
//    for (let loop = inputWord.length - 1; loop >= 0; loop--) {
//        outputWord += lowerInput.charAt(loop);
//    }
//    document.getElementById("outputWord").innerText = outputWord;
//});

//Identify valdid palindrome
