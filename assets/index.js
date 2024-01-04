'use strict'

// 1
const nSum = []

// 2.1


// 2.2
const university = {
  faculte: 'High IQ & IT-technologes',
  department: 'Machine Learning',
  adress: 'St. Dniprovska 33'
}

const student = {
  id: 1,
  name: 'Yurgenn',
  lastname: 'Clopp',
  male: true,
  uni: university,
  contacts: {
    phone: '+38061',
    email: 'cloppcontact@milo.milo',
    department: 'cafedra1'
  }
}

function getStudentInfo() {
  console.log(student);
}

// 2.3 додати студенту uni: university,

// 2.4 getStudentInfo

// 3.1 fill захищає/заповнює від пробілів (чистий Array тільки число), а map повертає нове, чистий масив. (_, - callback)
const arr = new Array(25).fill(null).map((_, i) => i+1);

// 4

class Book {
  constructor() {
    this._nameBook = 'My Way';
    this._author = 'John Smith';
    this._release = 2023;
    this._publishing = 'ArtHouse';
  }
   
}


// 5(+)

function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}



