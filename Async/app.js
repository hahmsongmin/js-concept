// fetch("https://yts.mx/api/v2/list_movies.json")
// .then(response => {
//     console.log(response);
//     return response.json()
// })
// .then(content => console.log(content))
// .catch(error => console.log(`${error}❌`));

//

// promise를 끝내기 위해 수많은 then 들을 사용하는 것 대신에
// await을 사용하면 됨.(await 는  promise가 끝나길 기다림)
// const getMovies = async() => {
//     try {
//         const response = await fetch("https://yts.mx/api/v2/list_movies.json")
//         const json = await response.json();
//         console.log(json);
//     } catch(error) {
//         console.log(`❌ ${error}`);
//     } finally {
//         console.log("✅ success");
//     }
// };

// getMovies();

// 두 개의 API를 얻는다.
// const getMovies = async() => {
//     try {
//         const [response1, response2]= await Promise.all([
//             fetch("https://yts.mx/api/v2/list_movies.json"),
//             fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100")
//         ]);
//         // axios사용하면 json이나 text로 변경해 줄 필요없음
//         const [movies, suggestions] = await Promise.all([
//             response1.json(),
//             response2.json()
//         ]);
//         console.log("1️⃣", movies);
//         console.log("2️⃣", suggestions);
//     } catch(error) {
//         console.log(`❌${error}`);
//     } finally {
//         console.log("✅ success");
//     }
// };

// getMovies();

"use strict";
// 🍕
// ✅ async await
// clear style of using promise :)

// 1. async (async 키워드를 쓰면 자동으로 promise로 바뀜)
async function fetchUser() {
  // do network request in 10 secs ....
  return "Ivan";
}
const user = fetchUser();
user.then(console.log);

// 2. await ⭐
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// race 는 먼저 받아오는 것을 출력
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
