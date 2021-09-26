// ✅ Promise

// const amIGood = new Promise((resolve, reject) => {
//     resolve("You are good!"),
//     reject("V");
// });

// amIGood
// .then(isOK => console.log(isOK, "✅"))
// .catch(isError =>console.log(isError, "❌"));

// ✅ Chaining Promises

// const amIGood = new Promise((resolve, reject)=>{
//     resolve(2);
// });

// amIGood
// .then(number => number * 2)
// .then(otherNubmer => otherNubmer * 2)
// .then(anotherNumber => anotherNumber * 2)
// .then(() => {
//     throw Error("is wrong");
// })
// .then(result => console.log(result))
// .catch(error => console.log(error, "❌"));

// ✅ Promise.all
// 하나의 API가 아닌 3개, 4개의 API에서 값을 불러와야 할때
// 즉 Promise.all은 순서대로 실행되지만 앞의 함수가 완료되는 것을
// 기다리지 않고, 비동기적으로 병렬로 실행
// 총 마지막 완료되는 함수까지 기달렸다가 값을 반환한다.
/* ⚡ https://code-masterjung.tistory.com/91 */

// const p1 = new Promise(resolve => {
//     setTimeout(resolve, 5000, "First")
// });
// const p2 = new Promise(resolve => {
//     setTimeout(resolve, 1000, "Second")
// });
// const p3 = new Promise(resolve => {
//     setTimeout(resolve, 3000, "Third")
// });

// const allPromise = Promise.all([p1, p2, p3]);
// allPromise.then(values => console.log(values));

// ✅ Promise Race
// p1, p2, p3 중 하나만 resolve 되거나 reject 되면 됨
// 즉 가장 빠른게 실행됨

// const p1 = new Promise(resolve => {
//     setTimeout(resolve, 5000, "First")
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 4000, "This is reject ❌")
// });
// const p3 = new Promise(resolve => {
//     setTimeout(resolve, 3000, "Third")
// });

// const allPromise = Promise.race([p1, p2, p3]);
// allPromise.then(values => console.log(values));

// ✅ finally
// resolve, reject 상관없이 마지막에 결과 실행
// 로딩 완료? 에 사용가능

// const p1 = new Promise(resolve => {
//     setTimeout(resolve, 5000, "First")
// }).then(value=> console.log(value)).finally(()=>console.log("Im done"));

// 읽어들인 뒤, fetch()는 Promise객체를 반환합니다.
// promise 방식 기반 비동기방식
// then(then 으로 반환되는 promise를 끝내줌)으로 다음 할일을 정해줌
// fetch("https://yts.mx/api/v2/list_movies.json")
// Api(요청주소로부터)는 나에게 response를 주고
// 그 response를 .text()할경우 텍스트로 변환하는 걸 시도
// (그리고 이건 나한테 Promise를 줘(이말은 then을 또 써야한다는 것))
// .then(response => {
//     console.log(response);
//     return response.json()
// })
// .then(content => console.log(content))
// .catch(error => console.log(`${error}❌`));

"use strict";
//🍕 Promise is a JS object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// 새로운 Promise가 만들어지면, 전달한 executor가 바로실행됨(주의)
// 서버와 통신 ↓
const promise = new Promise((res, rej) => {
  // doing some heavy work(network, read files)
  setTimeout(() => {
    res("IvanSelah");
    rej(new Error("no no no"));
  }, 2000);
});

// 2. Consumers : then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finish");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(`${hen} => 🐣`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🍕";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
