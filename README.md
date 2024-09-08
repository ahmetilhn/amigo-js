# Amigo JS

Amigo JS offers developers a powerful and easy-to-use toolset. With its clean, modular and scalable code structure, it accelerates development processes and reduces code complexity. With a wide range of functions, it offers ready-made methods for solving common problems.

<p align="center">
  <a href="https://www.npmjs.com/package/amigo-js"><img alt="NPM" src="https://img.shields.io/npm/v/amigo-js.svg" /></a>
  <a href="https://img.shields.io/npm/dy/amigo-js"><img alt="NPM" src="https://img.shields.io/npm/dy/amigo-js" /></a>
  <a href="https://github.com/transitive-bullshit/agentic/blob/main/license"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue" /></a>
</p>
## Installation

###### NPM

```bash
npm install amigo-js
```

###### YARN

```bash
yarn add amigo-js
```

## Awesome Utils

### deepClone

Clone data from any data (disconnect any data binding)

###### Function Signature

```js
deepClone(val: any): typeof val
```

###### Examples

```js
const clonedVal = deepClone({ name: "test" });
expect(clonedVal).not.toBe({ name: "test" }); // reference equal
expect(clonedVal).toEqual(clonedVal); // soft equal
```

## Compare

### isDeepEqual

Checks the equality of two values.

###### Function Signature

```js
isDeepEqual(valOne: any, valTwo: any): boolean
```

###### Examples

```js
isDeepEqual(10, 10); // true

isDeepEqual("test", 1); // false

isDeepEqual(null, 1); // false

isDeepEqual(null, NaN); // false

isDeepEqual(NaN, NaN); // false

isDeepEqual({ name: "john" }, { name: "john" }); // true

isDeepEqual(["john"], ["john"]); // true

isDeepEqual([{ key: "value" }], [{ key: "value" }]); // true
```

## Type Check

### isObject

Check if val is an object

###### Function Signature

```js
isObject(val: any): boolean
```

###### Examples

```js
isObject([]); // true
isObject(null); // false
isObject(undefined); // false
isObject(NaN); // false
isObject({}); //
isObject(new Date()); // true
```

### isDate

Check if val is an date

###### Function Signature

```js
isDate(val: any): boolean
```

###### Examples

```js
isDate(Date); // false
isDate(null); // false
isDate("12-22-2023"); // false
isDate(new Date()); // true
```

### isBoolean

Check if val is true or false (boolean)

###### Function Signature

```js
isBoolean(val: any): boolean
```

###### Examples

```js
isBoolean(null); // false
isBoolean(false); // true
isBoolean(true); // true
isBoolean(Boolean); // false
isBoolean(0); // false
```

### isArray

Check if val is an array

###### Function Signature

```js
isArray(val: any): boolean
```

###### Examples

```js
isArray(null); // false
isArray({}); // false
isArray([]); // true
isArray(new Array([])); // true
```

### isNumber

Check if val is an number

###### Function Signature

```js
isNumber(val: any): boolean
```

###### Examples

```js
isNumber(null); // false
isNumber(NaN); // true
isNumber(1); // true
isNumber("1"); // false
```

### isFunction

Check if val is an function

###### Function Signature

```js
isFunction(val: any): boolean
```

###### Examples

```js
isFunction(NaN); // false
isFunction(() => {}); // true
```

_created by Ahmet ilhan_
