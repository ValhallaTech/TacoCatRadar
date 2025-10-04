// Import Prism.js for syntax highlighting
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

// The actual code from Palindrome.js as a string
const palindromeCode = `// Import dependencies
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';

// Import custom CSS
import '../styles/custom.css';

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
async function checkPalindrome(event) {
    // Prevent form submission
    event.preventDefault();
    
    let inputStr = document.getElementById("inputBox").value;
    let inputBox = document.getElementById("inputBox");
    let outputBox = document.getElementById("outputBox");
    let button = document.getElementById("btnFlip");
    
    // Validation: Check for empty or whitespace-only input
    if (!inputStr || inputStr.trim() === '') {
        inputBox.classList.add('input-error');
        Swal.fire({
            title: "Empty Input!",
            text: "Please enter some text to check for palindromes.",
            icon: "warning",
        });
        return;
    }
    
    // Add loading state
    button.disabled = true;
    button.classList.add('loading');
    const originalText = button.textContent;
    button.textContent = 'Checking...';
    
    // Remove error state if present
    inputBox.classList.remove('input-error');
    
    // Small delay to show loading state (simulates processing)
    await new Promise(resolve => setTimeout(resolve, 300));
    
    let reversedStr = fncReverse02();
    
    // Display reversed string in output box
    outputBox.value = reversedStr;
    
    // Remove loading state
    button.disabled = false;
    button.classList.remove('loading');
    button.textContent = originalText;
    
    // Case-insensitive comparison
    if (inputStr.toLowerCase() === reversedStr.toLowerCase()) {
        // Add success state
        inputBox.classList.add('input-success');
        outputBox.classList.add('input-success');
        
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
        // Remove success state if present
        inputBox.classList.remove('input-success');
        outputBox.classList.remove('input-success');
        
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
});

// Clear validation states when user starts typing
document.getElementById("inputBox").addEventListener("input", function() {
    this.classList.remove('input-error', 'input-success');
    document.getElementById("outputBox").classList.remove('input-error', 'input-success');
});`;

// Display the code with syntax highlighting
const codeElement = document.getElementById('palindrome-code');
if (codeElement) {
    codeElement.textContent = palindromeCode;
    Prism.highlightElement(codeElement);
}
