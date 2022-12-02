// write a function that takes an number or a string and checks if that number or a string is a palindrome

let sentence: string = "Sore was I ere I saw Eros";
let anotherSentence: string = "Dennis sinned";
let definitelyNotPalindrome: string = "definitelyNotPalindrome";
let number: number = 12321;
console.log(typeof number);
let anotherNumber: number = 221122;
let definitelyNotPalindromeNumber: number = 123456;

let checkIfInputIsPalindrome = (input: any) => {
    let inputCopy: string | any;
    if (typeof input === "string") {
        inputCopy = input.toLowerCase();
    } else if (typeof input === "number") {
        inputCopy = input.toString();
    }

    let formattedInput = inputCopy.replace(/[^0-9a-z]/gi, "").split("");

    for (var i = 0; i < formattedInput.length / 2; i++) {
        if (
            formattedInput[i] == formattedInput[formattedInput.length - i - 1]
        ) {
            return true;
        }
    }
    return false;
};

console.log(checkIfInputIsPalindrome(sentence));
console.log(checkIfInputIsPalindrome(anotherSentence));
console.log(checkIfInputIsPalindrome(definitelyNotPalindrome));
console.log(checkIfInputIsPalindrome(number));
console.log(checkIfInputIsPalindrome(anotherNumber));
console.log(checkIfInputIsPalindrome(definitelyNotPalindromeNumber));
