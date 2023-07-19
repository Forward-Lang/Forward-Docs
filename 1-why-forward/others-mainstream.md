# Programming Paradigms: and their constructs 

The three main programming paradigms in widespread use today are:

* Imperative programming
* Functional programming
* Object-oriented programming

Each paradigm has different a different approach to how they solve problems.
We are going to go over some concepts that are central to each paradigm.
We are also going to implement these constructs from scratch.
We are just looking at the semantics of the programming languages.
Other aspects of software developement aren't going to be covered here.
This includes aspects such as agile vs waterfall vs scrum, or dynamic typing vs static typing.

----
## Semantics vs Syntax

I have tried to minimize any syntactical differences between the languages.
This way, we can focus on the semantical similarities between the languages.

But, what does syntax and semantics mean?
A quick explaination is that the semantics of a language is the underlying meaning of a language.
For example, in these all have similar semantics:

**English greeting**
>"hello"

**Spanish greeting**
>"hola"

**French greeting**
>"bonjour"

**Chinese greeting**
>"你好"

Syntax is a bit harder to explain.
In programming languages, when we talk about syntactical differences,
we are mainly talking about superficial differences in how a programming language structures itself.
Here are some examples of some made up syntaxes, with the same semantics:

**A syntax using Curly brackets**
> `function () { ... }`

**A syntax based on Mathematics**
> `f(x) = ...`

**A syntax using keywords**
> `function () do ... end`

**A syntax using prefix notation**
> `(function () ... )`

----

We are going to present these constructs in `javascript`, `bash` and `lua`.
I recommend checking out the following resources;

* `javascript`:
  [cheatsheet](https://learnxinyminutes.com/docs/javascript/) for a 5-10 minute introduction or memory aide.
  [online](https://replit.com/languages/javascript) interpreter, to run javascript code.
* `bash`:
  [cheatsheet](https://learnxinyminutes.com/docs/bash/) for a 5-10 minute introduction or memory aide.
  [online](https://replit.com/languages/bash) interpreter, to run bash code.
* `lua`:
  [cheatsheet](https://learnxinyminutes.com/docs/lua/) for a 5-10 minute introduction or memory aide.
  [online](https://replit.com/languages/lua) interpreter, to run lua code.
  
The cheatsheets are going to cover stuff that are more specific to each language.
We, on the other hand, are going to use the languages to highlight concepts.
These concepts are common among several programming languages, not just the ones mentioned here.

## Basics: functions and variables

The most fundemental feature in the vast majority of programming languages is by far functions.
Functions take inputs and output something in return.
You probably recognize this from mathematics:

```stem
f(x) = sqrt(1+x^2)
```

In the above example, we assume that both the inputs and outputs are numbers.
In programming we regularly work with a far more diverse range of "things".
Here's an example:

[others-mainstream.js](others-mainstream.js ':include :fragment=function')

[others-mainstream.sh](others-mainstream.sh ':include :fragment=function')

[others-mainstream.lua](others-mainstream.lua ':include :fragment=function')

These functions take as input some text, and return the boolean value `True`.
Boolean variables can only have one of two values: `True` or `False`.
We are going to use this `say` function in the upcoming examples,
and the `True` value is going to be especially useful for us in the section "<<if else then: short circuit>>".
There we will reimplement the `if ... then ... else ...` construct using short-circuit which depends on `say` returning a `True` value.

### Statements vs expressions

[others-mainstream.js](others-mainstream.js ':include :fragment=anonFunction')

[others-mainstream.sh](others-mainstream.sh ':include :fragment=anonFunction')

[others-mainstream.lua](others-mainstream.lua ':include :fragment=anonFunction')

## Imperative constructs

### if else then

[others-mainstream.js](others-mainstream.js ':include :fragment=ifElse')

[others-mainstream.sh](others-mainstream.sh ':include :fragment=ifElse')

[others-mainstream.lua](others-mainstream.lua ':include :fragment=ifElse')

### while, do until, for loops

[others-mainstream.js](others-mainstream.js ':include :fragment=loops')

[others-mainstream.sh](others-mainstream.sh ':include :fragment=loops')

[others-mainstream.lua](others-mainstream.lua ':include :fragment=loops')

## Imperative constructs from scratch 

### if else then: short circuit

`if ... else ... then ...`, implemented with short circuit evaluation.
Understanding this depends on you also understanding to a certain extent boolean expressions.
So here is a quick recap:

.`A and B` is `True` if and only if both `A` and `B` are `True`

| input: A | input: B | A and B 
|----------|----------|--------
| True     | True     | True    
| True     | False    | False   
| False    | True     | False   
| False    | False    | False   

.`A or B` is `True` if either `A` or `B` are `True`

| input: A | input: B | A or B 
|----------|----------|--------
| True     | True     | True    
| True     | False    | True   
| False    | True     | True   
| False    | False    | False   
  
  
In a lot of programming languages `AND` is represented by `&&`,
while `OR` is represented by `||`:

[others-mainstream.js](others-mainstream.js ':include :fragment=short')

[others-mainstream.sh](others-mainstream.sh ':include :fragment=short')

Luckily in some programming languages `AND` is represented by `and`,
while `OR` is represented by `or`:

[others-mainstream.lua](others-mainstream.lua ':include :fragment=short')

### loops: goto or recursion

[others-mainstream.js](others-mainstream.js ':include :fragment=recursion')

[others-mainstream.sh](others-mainstream.sh ':include :fragment=recursion')

[others-mainstream.lua](others-mainstream.lua ':include :fragment=recursion')

## Functional constructs

### map, filter, reduce

[others-mainstream.js](others-mainstream.js ':include :fragment=mapReduce')

[others-mainstream.sh](others-mainstream.sh ':include :fragment=mapReduce')

[others-mainstream.lua](others-mainstream.lua ':include :fragment=mapReduce')
    
### curry, partial application 

[others-mainstream.js](others-mainstream.js ':include :fragment=partial')

[others-mainstream.sh](others-mainstream.sh ':include :fragment=partial')

[others-mainstream.lua](others-mainstream.lua ':include :fragment=partial')
  
## Functional constructs from scratch 

### map, reduce, filter: recursion

### partial application: pattern-matching or currying 


## Object-Oriented constructs

### properties and methods

### inheritance

## Object-Oriented constructs from scratch 

### properties and methods: dictionaries


# Present programming languages: and their applications

1. Imperative: 
    * C
2. Functional
    * JavaScript 
3. Object oriented 
    * JavaScript 
