function printString(str: string): void {
  console.log(str);
}

function printNumber(num: number): void {
  console.log(num);
}

function printValue(value: string | number): void {
  if (typeof value === 'string') {
    printString(value);
  } else {
    printNumber(value);
  }
}

const value = Math.random() > 0.5 ? "hello" : 10;

printValue(value); // This will now work correctly