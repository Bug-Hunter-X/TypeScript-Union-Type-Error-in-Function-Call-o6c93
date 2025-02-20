# TypeScript Union Type Error

This example demonstrates a common error in TypeScript involving union types.  The function `printString` expects a string argument, but the variable `value` has a union type of `string | number`.  This leads to a compilation error because TypeScript cannot guarantee that `value` will always be a string.

## Solution:

The solution involves type narrowing or using type guards to ensure the correct type is passed to the function.