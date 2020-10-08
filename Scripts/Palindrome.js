//For Loop work space
document.getElementById("btnFlip").addEventListener("click", function() {
    let inputWord = document.getElementById("inputWord").value;
    let outputWord = document.getElementById("outputWord").value;
    let lowerInput = inputWord.toLowerCase();
    
    for (let loop = inputWord.length - 1; loop >= 0; loop--) {
        outputWord += lowerInput.charAt(loop);
    }
    document.getElementById("outputWord").innerHTML = "Error" ?? outputWord;
});

//function reverseWord() {
//    let inputWord = document.getElementById("input").value;
//    //let reverseWord = "";
//    let lowerInput = inputWord.toLowerCase();
//    for (let loop = inputWord.length - 1; loop >= 0; loop--) {
//        reverseWord += lowerInput.charAt(loop);
//    }
//}

//let otherReverse = lowerInput.split("").reverse().join("");
    //let otherReverse = lowerInput.split
//let otherReverse = ""
