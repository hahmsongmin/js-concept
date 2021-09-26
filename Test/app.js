"use strict";

//✅
// const sayHello = { name: "Selah", age: 30 };
// sayHello.hasJob = true;
// delete sayHello.hasJob;
// console.log(sayHello);

//✅
//함수를 선언과 동시에 실행하고 싶을때
// (function hello() {
//    console.log("Hello");
// })();

//✅
// Constuctor Function
// 자바스크립트 엔진이 알아서 오브젝트 생성해줌
// const person = new Person("Selah", 33);
// console.log(person);

// function Person(name, age) {
//   // this = {}; <= 생략
//   this.name = name;
//   this.age = age;
//   // return this <= 생략
// }

//✅
// key in obj 키가 있는지 확인 true, false
// console.log("dd" in person);

//✅
// in 배열 : 인덱스 값, 객체 : 키값
// const myarray = [1, 2, 3, 4, 5, true];
// for (let key in myarray) {
//   console.log(key);
// }
// for (let key in person) {
//   console.log(key);
// }
// // of 값
// for (let key of myarray) {
//   console.log(key);
// }

//✅ 오브젝트 복사
// const user4 = Object.assign({}, user);
// console.log(user4);

// const fruit1 = { color: "red" };
// const fruit2 = { color: "blue", size: "big" };
// const mixed = Object.assign({}, fruit1, fruit2);
// console.log(mixed);
// console.log(mixed.color);
// console.log(mixed.size);

//✅ Array
const fruits = ["🍎", "🍌"];
fruits.forEach((item) => console.log(item));

fruits.push("🍕");
fruits.pop();
console.log(fruits);
fruits.unshift("🍔");
console.log(fruits);
fruits.shift();
console.log(fruits);

// shift, unshift는 pop, push 보다 느리다.
// pop, push의 경우는 빈공간에서 하기때문에 넣고 빼고 기존데이터이동 없음
// shift, unshift의 경우는 기존 데이터를 이동해야 하므로 느림

// 지정 삭제 splice
fruits.push("🍈", "🍉", "🍇", "🥝");
console.log(fruits);
fruits.splice(2, 1);
console.log(fruits);
fruits.splice(2, 1, "🍜", "🍣");
console.log(fruits);

// 배열 합치기
const fruits2 = ["🍖", "🍗"];
const fruits3 = fruits.concat(fruits2);
console.log(fruits3);

// 배열 검색
console.clear();
console.log(fruits);

console.log(fruits3.indexOf("🍌")); // index 번호 리턴, 없으면 -1

console.log(fruits3.includes("🍌")); // boolean 리턴, 없으면 false

// 배열안에 똑같은 값이 있을 때
console.clear();
console.log(fruits);
fruits.push("🍌");
console.log(fruits);
console.log(fruits.lastIndexOf("🍌")); // 마지막에 있는 값
