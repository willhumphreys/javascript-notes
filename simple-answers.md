- Create a simple file with a function that adds two numbers
- Create a simple file with a function that uses a default paramter.

add.js

```javascript
export const add = (x, y) => {
  return x + y;
};

export const addWithDefault = (x = 200, y) => {
  return x + y;
};
```

add.test.js

```javascript
import { add, addWithDefault } from "./add2";

describe("test the add functions", () => {
  describe("test the basic add function", () => {
    it("shoud add two numbers", () => {
      expect(add(2, 2)).toEqual(4);
    });
  });

  describe("test the basic add function with a default", () => {
    it("should add two numbers with a default", () => {
      expect(addWithDefault(undefined, 4)).toEqual(204);
    });
  });
});
```

factorial.js

```javascript
let factorial = num => {
  let result = 1;
  while (--num) result *= num + 1;
  return result;
};

const result = factorial(4);

console.log(result);
```
