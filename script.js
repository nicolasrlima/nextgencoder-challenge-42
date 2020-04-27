const numberInput = document.querySelector('input');
const resolveBtn = document.querySelector('button');
const resultSpan = document.querySelector('span');

function checkPalindrome(number) {
  const numberString = number.toString();
  const numberLength = numberString.length;
  let i;
  // if number has only one algarism consider it a palindrome
  if (numberLength === 1) {
    return true;
  } else if (numberLength !== 0) {
    for (i = 0; i < Math.ceil(numberLength / 2); i += 1) {
      if (numberString[i] !== numberString[numberLength - i - 1]) return false;
    }
    return true;
  }
  return 'please input a number';
}

function handleClick() {
  const result = checkPalindrome(numberInput.value);
  console.log(result);
}

resolveBtn.addEventListener('click', handleClick);
