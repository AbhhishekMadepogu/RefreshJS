function h1(strings, ...values) {
  var body = "";
  for (var i = 0; i < strings.length; i++) {
    body += strings[i] + (values[i] || "!");
  }
  console.log(body);
}
var name = "abhi";
var place = "world";
h1`hello ${place} my name is ${name}`;
{
  var abhi = "block";
  abhi = "bbhi";
}
console.log(abhi);
//variable hoisting
console.log(foo);
var foo = 0;
function zoo() {
  var a;
  console.log("Variable hoisting", a);
  a = 1;
}
zoo();
//Scope Chain
var myvar = 1;
function goo() {
  var myvar = 1;
  function foo() {
    console.log("Scope Chain", myvar);
  }
  foo();
}
goo();

function foo1() {
  //Undefined due to lexical scope of JS
  // console.log(v1);
}
function goo1() {
  var v1 = 1;
  foo1();
}
goo1();
//Closure multiple function
function sayHello(name) {
  return function () {
    return function () {
      console.log(`Hello,${name}`);
    };
  };
}
sayHello("Abhishek")()();
//Closures
var fool = [];
for (var i = 0; i < 10; i++) {
  fool[i] = function () {
    return i;
  };
}
console.log(fool[0]());
//Immediately invoking a function
var ffol1 = [];
for (var i = 0; i < 10; i++) {
  (function (y) {
    ffol1[y] = function () {
      return y;
    };
  })(i);
}
console.log(ffol1[0]());
var salary = "1000$";
(function () {
  console.log("Original salary was " + salary);
  var salary = "5000$";
  console.log("My New Salary " + salary);
})();
//rest & spread operator
function f(method, ...argss) {
  console.log(method);
  console.log(argss);
}
f(1, 2);
var a = [1, 2, 3];
var b = [2, 3, ...a];
console.log(b);
//destructuring pattern
const obj = { first: "Abhishek", last: "M", age: 25 };
const { first: fn, last: ln } = obj;
console.log(fn);
console.log(ln);
//default parameters
function fo({ x = 0 }) {
  console.log(x);
}
fo({});
//map and find
const people1 = [
  {
    name: "hello",
    peop: [
      {
        id: 1,
        name: "John",
        address: "",
      },
      {
        id: 3,
        name: "John",
        address: "",
      },
      {
        id: 2,
        name: "Alice",
        address: "",
      },
    ],
  },
  {
    name: "hello",
    peop: [
      {
        id: 1,
        name: "John",
        address: "",
      },
      {
        id: 2,
        name: "Alice",
        address: "",
      },
    ],
  },
  {
    name: "hello",
    peop: [
      {
        id: 1,
        name: "John",
        address: "",
      },
      {
        id: 2,
        name: "Alice",
        address: "",
      },
    ],
  },
  {
    name: "hello",
    peop: [
      {
        id: 1,
        name: "John",
        address: "",
      },
      {
        id: 2,
        name: "Alice",
        address: "",
      },
    ],
  },
  {
    name: "hello",
    peop: [
      {
        id: 1,
        name: "John",
        address: "",
      },
      {
        id: 2,
        name: "Alice",
        address: "",
      },
    ],
  },
  {
    name: "hello",
    peop: [
      {
        id: 1,
        name: "John",
        address: "",
      },
      {
        id: 2,
        name: "Alice",
        address: "",
      },
    ],
  },
  {
    name: "hello",
    peop: [
      {
        id: 1,
        name: "John",
        address: "",
      },
      {
        id: 2,
        name: "Alice",
        address: "",
      },
    ],
  },
];
const address1 = [
  {
    id: 1,
    peopleId: 1,
    address: "Some street 1",
  },
  {
    id: 2,
    peopleId: 2,
    address: "Some street 2",
  },
];
for (i in people1) {
  people1[0].peop.map((e, i) => {
    let temp = address1.find((element) => element.id === e.id);

    console.log(temp);
  });
}

function sum(a, b) {
  return a + b;
}
sum(1, 2, 3, 4, 5);
//function arguments
function sum1() {
  let total = 0;
  for (i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(total);
}
//array looping
sum1(1, 2, 3, 4, 5, 6);
console.log("Test");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  //break;
  //continue;
}
// in keyword in object gives value of the object
arr.forEach(function (val) {
  val += val;
  console.log("val", val);

  //of key word to loop in arrays gives value
  for (i of arr) {
    console.log("value", i);
  }
  //this keyyword
  console.log(this);
  this.abhishek = 1;
  console.log(this.abhishek);
  console.log(abhishek);
  console.log(window.abhishek);

  function checkThis() {
    console.log(this);
  }
  //checkThis()
  var asim = {
    checkThis: function () {
      console.log(this);
    },
  };
  asim.checkThis;

  //Fat Arrow
  let cb = () => {
    console.log("call");
  };
  let cb1 = function () {
    console.log("call1");
  };
});
