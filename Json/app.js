"use strict";

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

// 함수는 제외 string 형태이므로
json = JSON.stringify(rabbit);
console.log(json);

// 원하는 것만 to JSON
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "name" ? "selah" : value;
});
console.log(json, "🍕");

// 2. JSON to Object
// parse(json)

let obj = JSON.parse(json);
console.log(obj);

obj = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj.birthDate.getDate());
