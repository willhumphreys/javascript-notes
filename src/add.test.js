import { add, addWithDefault } from "./add";

describe("add numbers", () => {
  describe("Add using normal add", () => {
    it("should add two numbers", () => {
      console.log(add(2, 5));
    });
  });

  describe("Add using add with default", () => {
    it("should add two numbers with default", () => {
      console.log(addWithDefault(undefined, 4));
    });
  });
});
