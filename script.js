const numberInput = document.querySelector('input');
const resolveBtn = document.querySelector('button');
const resultSpan = document.querySelector('span');

function isPalindrome(number) {
  const numberString = number.toString();
  const numberLength = numberString.length;
  let i;

  if (numberLength === 1) {
    return true;
  }
  for (i = 0; i < Math.ceil(numberLength / 2); i += 1) {
    if (numberString[i] !== numberString[numberLength - i - 1]) return false;
  }
  return true;
}

function findNearestPalindrome(number) {
  let i;
  const upperPalindrome = { value: 0, d: 0 };
  const lowerPalindrome = { value: 0, d: 0 };

  for (i = number; i <= 9999999; i += 1) {
    if (isPalindrome(i) === true) {
      upperPalindrome.value = i;
      upperPalindrome.d = i - number;
      break;
    }
  }

  for (i = number; i >= 0; i -= 1) {
    if (isPalindrome(i) === true) {
      lowerPalindrome.value = i;
      lowerPalindrome.d = number - i;
      break;
    }
  }
  if (upperPalindrome.d <= lowerPalindrome.d) return upperPalindrome.value;
  return lowerPalindrome.value;
}

function handleClick() {
  if (numberInput.value >= 0 && numberInput.value <= 999999 && numberInput.value.length !== 0) {
    const result = findNearestPalindrome(Number(numberInput.value));
    resultSpan.innerText = result;
  } else {
    resultSpan.innerText = 'Input not within constraints, try again with a number between 0 and 999999';
  }
}

resolveBtn.addEventListener('click', handleClick);
