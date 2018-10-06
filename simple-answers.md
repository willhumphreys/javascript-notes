- Create a simple file with a function that adds two numbers
- Create a simple file with a function that uses a default paramter.

add.js

```
let add = (x, y) => {
  return x + y;
};

export default add;
```

add.test.js

```
import add from "./add";

describe("add two numbers", () => {
  it("add two numbers", () => {
    console.log(add(1, 2));
  });
});
```
