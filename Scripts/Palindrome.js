// Import dependencies
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';

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
        
        if (inputStr === reversedStr) {
            // Trigger confetti celebration
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            
            Swal.fire({
                title: "You Haz Palindrome!",
                icon: "success",
            });
        }
        else {
            Swal.fire({
                title: "Nope. Palindrome Failz...",
                icon: "error",
            });
        }
    });
