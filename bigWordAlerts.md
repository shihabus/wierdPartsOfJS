# Big word alerts
## Syntax Parser:
A program that reads your code
and determines what it does
and if its grammar is valid or not

## Lexical Environment
Where something sits
physically in the code

## Execution context
A wrapper to help manage the code
that is running. There are lots of lexical
Environments. Which one is currently running is managed
via Execution contexts. The Execution context has: - an Execution context object - this keyword reference - outer Environment reference - your code

## Object
Collection of name value pairs. A Name maps to a unique value.
It can be reassigned many times, but can only have
one value in a given context.
The name inturn can take name/value pairs, as value.

## Global Execution context
The base Execution context. This ready have
a GLOBAL OBJECT and THIS. For Google chrome GLOBAL OBJECT is
`WINDOW`. In global, THIS keyword refer to this GLOBAL OBJECT.
Functions and variables defined globally are attached to GLOBAL OBJECT.

## Global
Code not inside in a function.

## Single Threaded
one command at a time

## Synchronous
one at a time and in order

## Invocation
Run/call a function using ()

## Scope
where a variable is available in your code

## Asynchronous
More than one at a time

## Dynamic Type
You don't tell the engine what
type of data a variable holds,
it figures it out while your code is running.

## Primitive Types
type of data that represents a single value,i.e not an Object

## Operators
a special function that is syntactically written differently.
Generally it takes two params and return one result

## Operator precedence
which operator function gets called first. The higher precedence wins.

## Operator associativity
what order operator functions get called in: left to right or right to left,
when functions have same precedence.

## Coercion
Converting a value from one type to another

## Namespace
It is a container for variables and functions. It is used to keep variables and functions
with same name separate. Readily JS done have Namespaces.
In JS this can be done using Objects. For example,

var english={
greet:'Hello'
}
var spanish={
greet:'Hola'
}
console.log(english.greet)
console.log(spanish.greet)

## First Class Functions
Everything you can do with other types you can do with functions. Assign them
to variables, pass them around, create them on the fly.

## Expression
A piece of code that results in a value. They need not be saved to a variable.

## Mutate
To change something

## Arguments
Parameters you pass to a function. JS provides a keyword with same name to access the all.

## Callback function
A function you give to another function,
to be run when the other function is finished. So the function
you call/invoke 'calls back' by calling the function you gave it
when it finishes.

## Function Currying
Creating a copy of function, but with some preset Parameters

## Inheritance
One Object gets access to the properties and methods of another Object.

## Reflection
An Object can look at itself, listing and changing its properties and methods.

## Function Constructor
A normal function that is used to construct Objects. The 'this' variable
points to a new empty Object, and that Object is returned from the function
by default(if no other Objects are being returned explicitly).

```
function Person(firstname){
    this.firstname=firstname;
}
var shihab=new Person(Shihab);
```
## Polyfill
Code that adds a feature which the engine may lack.

## Syntactic Sugar
A different way to type something that doesn't change how it
works under the hood.

## ```typeof```
It tells what is the type of the variable. It is an operator 
which returns a String.

## ```instanceof```
```
function Person(){}
var shihab=new Person();
console.log(shihab instanceof Person)
```
If in the whole prototype chain, we could find 
the Person Object it will return true.