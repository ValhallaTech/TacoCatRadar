// Import Prism.js for syntax highlighting
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../content/main.css';

// The actual code from Palindrome.js as a string
const palindromeCode = `// Import dependencies
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
    let inputStrLngth = inputStr.length;
    for (let i = inputStrLngth - 1; i >= 0; i--) {
        reversedStr += inputStr[i];
    }
    return reversedStr;
}

//Function to check palindrome and display results
function checkPalindrome(event) {
    // Prevent form submission
    event.preventDefault();
    
    let inputStr = document.getElementById("inputBox").value;
    let reversedStr = fncReverse02();
    
    // Display reversed string in output box
    document.getElementById("outputBox").value = reversedStr;
    
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
}

// Module scripts load after DOM is ready, so we can attach directly
// Wire up the button click event
document.getElementById("btnFlip").addEventListener("click", checkPalindrome);

// Wire up the form submit event (Enter key)
document.querySelector("#tacoContainer01 form").addEventListener("submit", checkPalindrome);

// Also add keypress listener to input box as backup
document.getElementById("inputBox").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkPalindrome(event);
    }
});`;

// Display the code with syntax highlighting
const codeElement = document.getElementById('palindrome-code');
if (codeElement) {
    codeElement.textContent = palindromeCode;
    Prism.highlightElement(codeElement);
}
