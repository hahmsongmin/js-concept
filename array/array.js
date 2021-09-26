// --------------------------------------------------
// ⚡ Array.from() and Array.of()

// ✅ ES6  Array.of()

// const friends = Array.of("nico", "lynn", "selah", "ivan");
// console.log(friends);
// --> ["nico", "lynn", "selah", "ivan"]

// ` ` <-- 👍 template literal (space, enter도 고려해줌)

// ✅ ES6  Array.from()
// 👍 array가 아닌 것을 array로 만들어줘서 사용할수 있게해줌
// buttons는 console상에서는 array처럼 보이지만 array가 아님
// const buttons = document.querySelectorAll("button");
// console.log(buttons);
// // --> 👍 html를 다루다보면 array를 얻지 못하고 array-like object를 얻음
// // Array.from(buttons)가 array를 반환했고 forEach를 사용할수 있게됨
// Array.from(buttons).forEach(button => {
//     button.addEventListener("click", () => console.log("Hi"));
// });

// --------------------------------------------------
// ⚡ Array.find() Array.findIndex() Array.fill()

// ✅ ES6  Array.find()
// const friends = [
//     "nico@gmail.com",
//     "lynn@naver.com",
//     "dal@yahoo.com",
//     "mark@korea.com",
//     "flynn@korea.com"
// ];
// // 👍 찾은값 중에 첫번째꺼를 반환 한다.
// const target = friends.find(friend => friend.includes("@korea.com"));

// console.log(target);

// ✅ ES6  Array.findIndex()
// const friends = [
//     "nico@gmail.com",
//     "lynn@naver.com",
//     "dal@yahoo.com",
//     "mark@hotmail.com",
//     "flynn@korea.com"
// ];
// // 👍 찾는 값이 어디 element에 위치하고 있는지 알려줌
// // 그 값을 이용하여 수정할 수 있어 유용하다. 찾지못하면 -1 값 반환
// const target = friends.findIndex(friend => friend.includes("@korea.com"));

// // friends[target] = "flynn@gmail.con"; //방법1
// const username = friends[target].split("@")[0];
// const email = "gmail.com";
// friends[target] = `${username}@${email}`; //방법2

// console.log(friends);

// ✅ ES6  Array.fill()
// const friends = [
//     "nico@gmail.com",
//     "lynn@naver.com",
//     "dal@yahoo.com",
//     "mark@hotmail.com",
//     "flynn@korea.com"
// ];
// // 👍 array를 채운다. fill.(채울값, 시작할위치, 마지막위치)
// // 마지막위치가 3이면 2인덱스까지 적용(마지막위치전 인덱스까지)
// const target = friends.findIndex(friend => friend.includes("@korea.com"));
// console.log(friends);
// friends.fill("*".repeat(5), 1, 3);
// console.log(friends);

// --------------------------------------------------
const animals = ["🐇", "🐓"];

const [first, second] = animals;
console.log(first);
