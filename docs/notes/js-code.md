```js
// Write a program that prints a multiplication table for numbers up to 12.

function printMultiplicationTable(num = 12) {
  const table = [];
  // counter starting at 1 to avoid zero padding on table
  for (let j = 1; j <= num; j++) {
    let row = new Array(num).fill(1).map((n, i) => {
      // i+1 to start at 1 and not at zero
      return (i + 1) * j;
    });
    table.push(row);
  }
  return table;
}
let result = printMultiplicationTable();
console.table(result);
```
