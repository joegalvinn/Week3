//export so this function is available in other files
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function isPalindrome(testString, indexes) {
  testString = testString.toLowerCase();
  indexes = testString.length - 1;
  let testString1 = "";
  let testString2 = "";
  for (let i = indexes; i >= 0; i--) {
    if (testString[indexes - i].match(/[a-z]/i)) {
      testString1 = testString1 + testString[indexes - i];
    }
    if (testString[i].match(/[a-z]/i)) {
      testString2 = testString2 + testString[i];
    }
  }
  if (testString1 == testString2) {
    return true;
  } else {
    return false;
  }
}

export function thisIsPalindrome(testString) {
  // Convert the string to lowercase to make it case-insensitive
  testString = testString.toLowerCase();

  // Initialize two pointers: one starting at the beginning, the other at the end
  let left = 0;
  let right = testString.length - 1;

  // Loop until the two pointers meet in the middle
  while (left < right) {
    // Skip non-alphabet characters from the left
    if (!testString[left].match(/[a-z]/i)) {
      left++;
      continue;
    }

    // Skip non-alphabet characters from the right
    if (!testString[right].match(/[a-z]/i)) {
      right--;
      continue;
    }

    // Compare characters at the left and right positions
    if (testString[left] !== testString[right]) {
      return false; // If they don't match, it's not a palindrome
    }

    // Move the pointers closer to the middle
    left++;
    right--;
  }

  // If the loop completes, the string is a palindrome
  return true;
}
