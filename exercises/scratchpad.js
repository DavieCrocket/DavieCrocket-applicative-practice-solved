var person1 = {
  firstName : 'Jason',
  lastName: 'Holla',
  age: 25,
  hobbies: ['skateboarding', 'code'],
  face: {
    eyeColor: 'blue',
    glasses: false,
  },
  greeting: function() {
    return 'My name is ' + this.firstName + ' and I\'m ' + this.age + ' years old.'
  }
}

console.log(person1.firstName);
console.log(person1['lastName']);

console.log(person1.face.eyeColor);
console.log(person1.greeting());

var person2 = new Object();

person2.name = 'Mary';
person2.age = 44;
person2.greeting = function() {
  return 'My name is ' + this.name + ' and I\'m ' + this.age + ' years old.'
}

var person3 = {};  //more common way to create Object() (see line 21).

person3.name = 'Jose';
person3.age = 22;
person3.greeting = function() {
  return 'My name is ' + this.name + ' and I\'m ' + this.age + ' years old.'
}

console.log(person2);
console.log(person3);

// Object Constructor: 
function Person(name, age) { 
  this.name = name;
  this.age = age;
  this.greeting = function() {
  return 'My name is ' + this.name + ' and I\'m ' + this.age + ' years old.'
}
}  // Capitalized Person to keep same format as Object(); (line 21).

console.log(new Person('James', 24));
console.log(new Person('Julie', 44));


var humans = [];

humans.push(new Person('James', 24));
humans.push(new Person('Julie', 19));
humans.push(new Person('Jackson', 99));
humans.push(new Person('Jared', 56));

// console.log(humans);

for (var i = 0; i < humans.length; i++) {
  var human = humans[i];
  console.log(human.greeting());
}