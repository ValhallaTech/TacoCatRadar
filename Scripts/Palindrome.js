
function fncReverse02 ()
{
    let reversedStr = "";
    let inputStr = document.getElementById ( "inputBox" ).value;
    for ( let i = inputStr.length - 1; i >= 0; i-- )
    {
        reversedStr += inputStr[i];
    }
    return reversedStr;
}

document.getElementById ( "btnFlip" ).addEventListener ( "click",
        function ()
        {
            let inputStr = document.getElementById("inputBox").value;
            let reversedStr = fncReverse02 ();
            document.getElementById ( "outputBox" ).innerHTML = reversedStr;

            if ( inputStr == reversedStr )
            {
                swal({
                    title: "Palindrome Confirmed",
                    icon: "success",
                });
            }
            else
            {
            swal({
            title: "Palindrome Failz",
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
