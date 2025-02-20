function printString(str: string): void {
  console.log(str);
}

function printNumber(num: number): void {
  console.log(num);
}

const value = Math.random() > 0.5 ? "hello" : 10;

// This will cause a compilation error because the type of value is a union of string and number.
printString(value);