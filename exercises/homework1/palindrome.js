//palindrome
var isPalindrome = function (str) {
    str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    var length = str.length;
    if (length <= 1)
        return true;
    if (str[0] !== str[length - 1])
        return false;
    return isPalindrome(str.slice(1, -1));
};
var exampleString = "A man, a plan, a canal: Panama";
if (isPalindrome(exampleString))
    console.log("Es un palíndromo");
else
    console.log("No es un palíndromo");
