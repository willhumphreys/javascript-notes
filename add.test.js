import { add, addWithDefault } from "./add";

describe("add two number", () => {
  describe("add numbers", () => {
    it("should add two numbers", () => {
      expect(add(2, 2)).toEqual(4);
    });
  });
  describe("should add two numbers with a default", () => {
    expect(addWithDefault(undefined, 4)).toEqual(204);
  });
});
