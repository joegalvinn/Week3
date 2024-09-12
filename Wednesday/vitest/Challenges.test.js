//i am going to write a test for my add function

//import from other files
import { test, expect, describe } from "vitest";
import { add } from "./Challenges";
import { subtract } from "./Challenges";
import { isPalindrome } from "./Challenges";
import { thisIsPalindrome } from "./Challenges";

test("add", function () {
  const result = add(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test("subtract", function () {
  const result = subtract(10, 5);
  const expected = 5;

  expect(result).toBe(expected);
});

describe("isPalindrome", () => {
  test("returns true for palindromic strings", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("deified")).toBe(true);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });
});

describe("thisIsPalindrome", () => {
  test("returns true for palindromic strings", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("deified")).toBe(true);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });
});
