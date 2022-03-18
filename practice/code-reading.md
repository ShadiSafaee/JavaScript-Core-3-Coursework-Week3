# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
Line 5 is inside the function and the variable is not global, so 2 will be output. However, line 7 is printing a variable which is defined out of our function which is 1.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
Line 29 will print out 10 as variable x is globalised. Line 34 output will be undefined as variable y is only defined inside the f1 and not in global scope

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x); 10
console.log(x); 9

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y); 
```

What will be the output of this code. Explain your answer in 50 words or less.
will output 9 and x: 10. x and y are const variables so both can't be changed, however y is an object and its value can be changed within the object