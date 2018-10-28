import { reverse } from "./reverseStringMap";

it("should reverse a string", () => {
  expect(reverse("abc")).toEqual("cba");
});
