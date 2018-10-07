import { isPalindrome } from "./isPalindrome2";

describe("test the palindrome function", () => {
  it("test with anna", () => {
    expect(isPalindrome("anna")).toEqual(true);
  });

  it("test with happy", () => {
    expect(isPalindrome("happy")).toEqual(false);
  });
});
