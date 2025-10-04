// Import dependencies
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import confetti from 'confetti-js';
import swal from 'sweetalert';

// Import custom CSS
import '../content/main.css';

//Function that reverses the input string
function fncReverse02() {
    let reversedStr = "";
    let inputStr = document.getElementById("inputBox").value;
    let inputStrLngth = inputStr.length
    for (let i = inputStrLngth - 1; i >= 0; i--) {
        reversedStr += inputStr[i];
    }
    return reversedStr;
}

//Wires the button element to call the reverse function and check if the input string is a palindrome by comparing it to the output string
document.getElementById("btnFlip").addEventListener("click",
    function () {
        let inputStr = document.getElementById("inputBox").value;
        let reversedStr = fncReverse02();
        let fncSuccess01 = swal({
            title: "You Haz Palindrome!",
            icon: "success",
        });
        if (inputStr === reversedStr) {
            confetti.start(1000);
            fncSuccess01;
        }
        else {
            swal({
                title: "Nope. Palindrome Failz...",
                icon: "error",
            });
        }
    });





//function reverseMe() {
//}

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
