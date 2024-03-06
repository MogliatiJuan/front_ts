//palindrome
const isPalindrome = (str: string): boolean => {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const length = str.length;

  if (length <= 1) return true;
  if (str[0] !== str[length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
};

let exampleString: string = "A man, a plan, a canal: Panama";
if (isPalindrome(exampleString)) console.log("Es un palíndromo");
else console.log("No es un palíndromo");
