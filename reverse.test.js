import { reverse } from "./reverse";

it("should reverse a string", () => {
  expect(reverse(["a", "b", "c"])).toEqual(["c", "b", "a"]);
});
