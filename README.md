# Javascript OOP Lab

## Make an ATM

For this exercise you will be creating an ATM class.

It will have the following properties...
* `type` (e.g., "checking"), which should be determined by some input
* `money`, which should start out as `0`

It should have the following methods...
* `withdraw`, which should decrease the amount of money by some input
* `deposit`, which should increase the amount of money by some input
* `showBalance`, which should print the amount of money in the bank to the console.

The `Atm` class has a `transactionHistory` property which keeps track of the withdrawals and deposits made to the account.

- Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.

#### Bonus

Give the `Atm` class a `backupAccount` property that can, optionally, contain a reference to another instance of the class, determined by some input

- Whenever an ATM's balance goes below zero, it will remove money from the instance stored in `backupAccount` so that its balance goes back to zero.
- This should trigger a withdrawal in the back up account equal to the amount of money that was withdrawn from the original account.

> 15 minutes exercise. 5 minutes review.


<br>


## Create a `RecordAlbums` Class

It should have the following properties...

- artistName(string)
- albumName(string)
- songs (array of strings)
- currentSong (string from array)

It should have the following methods...

- nextSong(method), which prints out its result
- previousSong(method), which prints out its result

### Bonus I

> Try implementing a class feature we won't be covering in class.

Create a "getter" and "setter" methods for retrieving and updating `artistName`, `albumName`, and `songs`.

#### References

* Read the "Get & Set" section [here](https://coryrylan.com/blog/javascript-es6-class-syntax).


<br>

## Geometry Class

> **NOTE:** You can ignore the `module is not defined` error you see in the console when opening `index.html` in the browser. You should still be able to test your code.

### Rectangle

Define a `Rectangle` class. Its constructor should take a `length` and `width` as arguments.

Augment the class with the following methods...
* `isSquare` - returns true if the rectangle is a square.
* `area` - calculates the area of the rectangle.
* `perimeter` - calculates the perimeter of the rectangle.

Create a few rectangles with different lengths and widths.

**Bonus**: Test your outcomes using [Jasmine](https://github.com/ga-wdi-lessons/js-jasmine)!


### Triangle

Define a `Triangle` class. Its constructor should take three sides -- `sideA` `sideB` and `sideC` -- as arguments.

Augment the class with the following methods...
* `isEquilateral` - returns true [if the triangle is equilateral](http://en.wikipedia.org/wiki/Equilateral_triangle).
* `isIsosceles` - return true [if the triangle is isosceles](http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides).
* `area` - calculates the [area of the Triangle](http://en.wikipedia.org/wiki/Heron%27s_formula).
* `isObtuse` - returns true [if the triangle is obtuse](http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles).

Create a few rectangles with different lengths and widths.

**Bonus**: Test your outcomes using [Jasmine](https://github.com/ga-wdi-lessons/js-jasmine)!


### LineSegment

Define a `LineSegment` class. Its constructor should take two pairs of coordinates -- `x1` `y1` `x2` `y2` -- as arguments.

Augment the class with the following method...
* `length` – calculates the length of the (x1, y1) --> (x2, y2) [line segment](http://en.wikipedia.org/wiki/Pythagorean_theorem).
