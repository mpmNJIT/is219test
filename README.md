[![Build Status](https://travis-ci.org/mpmNJIT/is219test.svg?branch=master)](https://travis-ci.org/mpmNJIT/is219test)
[![Coverage Status](https://coveralls.io/repos/github/mpmNJIT/is219test/badge.svg?branch=master)](https://coveralls.io/github/mpmNJIT/is219test?branch=master)

These 4 javascript files and tests demonstrate the 4 principles of object oriented programming.

Encapsulation:

Encapsulation is the ability for objects in programing to have their own private states separate from each other, and
preventing objects from having direct access to the other states. In the encapsulation.js file, we have a PetDog()
construct, along with 2 separate constructs named Dog1 and Dog2. We can change the state of their hunger and thirst
with the exercise method, but the state itself can not be directly manipulated, and each dog has a separate hunger and
thirst state.

Abstraction:

Abstraction is a way of simplifying objects so that only a high-level mechanism for using it is exposed. With the
MathMachine() construct in abstraction.js, it has 3 hard coded numbers, and a single number that can be chosen at will
with the MathMaking method. The only 2 methods the user has with the MathMachine construct is supplying a number with
MathMaking and getting the result of the equation with getResult, but otherwise the user can't change the formula and
doesn't need to know what the formula is.

Inheritance:

Inheritance is when you have a specific class inherit fields and methods from a parent class, letting you build on code
modularly and not rebuilding something that you've already made. For example, in inheritance.js we have the Feline class
and the species class. The Species class inherits from Feline and lets us use the say_size() method of Feline inside of
the Species() class method say_species().

Polymorphism:

Polymorphism is the idea that you can give different classes a similar or identical sounding method, but have said
method work differently depending on the class. For example in polymorphism.js, calling the sound() method for the dog
class returns "woof", but calling the same method from the inherited puppy class returns "whine".