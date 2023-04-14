const integerInputElement = document.getElementById("integer_input");
const resultElement = document.getElementById("result");

integerInputElement.addEventListener("input", handleInput);

function handleInput() {
  let value = integerInputElement.value;
  if (value < 0) {
    resultElement.innerHTML = `<p style="color:red">Enter a positive number</p>`;
  } else if (value.length === 0) {
    resultElement.innerHTML = "";
  } else if (isAlphabetsPresent(value)) {
    resultElement.innerHTML = `<p style="color:red">Please enter a number.</p>`;
  } else if (isPalindrome(value)) {
    resultElement.innerHTML = `<p style="color:green">Yes. This is a palindrome!</p>`;
  } else {
    resultElement.innerHTML = `<p style="color:red">No. Try again.</p>`;
  }
}

function isAlphabetsPresent(value) {
  var regExp = /[a-zA-Z]/g;
  return regExp.test(value);
}

let isPalindrome = function checkIfValueIsPalindrome(value) {
  const array = value.split("");
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    if (array[left] === array[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }
  return true;
};
