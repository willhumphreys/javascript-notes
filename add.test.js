import { add } from "./add";

describe("add something", () => {
  it("should add something", () => {
    expect(add(1, 3)).toEqual(4);
  });
});
