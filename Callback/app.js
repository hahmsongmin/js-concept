"use strict";

// callback함수, 전달한 함수를 나중게 호출해줘

// 동기(순서)와 비동기(예측되지않는순서)

// JavaScript is synchronous.(정해진순서대로)
// hoisting => var, function declaration(선언)이 제일위로 올라가는 것
// hoisting이 된 이후부터 순서대로 실행

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
// 안좋은예 콜백지옥
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "Ivan" && password === "1234") ||
        (id === "coder" && password === "5678")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "Ivan") {
        onSuccess({ name: "Ivan", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      () => {
        alert("Good Login");
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
