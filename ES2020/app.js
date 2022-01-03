// ES 2020

// ✅ ?? Operator
// null 이거나 undefined일 때만 작동함

// || <== 단점 0 이거나 '' 일때 false 이므로
// 0 '' 값을 반환하지 않음

// let yourname;
// console.log(yourname ?? 'Hello');

// ✅ ? Optional Chaining
// 값이 존재하지 않을 때
// 존재한다고 생각했지만 실상은 undefined 상태인경우

// const Ivan = {
//   name: 'IvanSelah',
// };

// console.log(Ivan.profile.email);
// ↑ Uncaught TypeError: Cannot read properties of undefined (reading 'email')
// console.log(Ivan.profile && Ivan.profile.email);
// console.log(Ivan.profile?.email);
// console.log(Ivan?.profile?.email?.provider?.name);

// ✅ padStart and padEnd
// 값을 변경하는 것이 아니라 반환하므로 값은 변화가 없다.
// let hours = 12;
// let minutes = 3;
// let seconds = 2;
// console.log(`${hours}h:${String(minutes).padStart(2, '0')}m:${String(seconds).padStart(2, '0')}s`);
// console.log('1'.padStart(2, '0').padEnd(3, 'S'));

// ✅ trim, trimStart, trimEnd
// 값을 변경하는 것이 아니라 반환하므로 값은 변화가 없다.
// console.log('                      Hello'.trimStart());
// console.log('Hello                        '.trimEnd());
// console.log('        Hello            '.trim());

// ✅ Object entries, Object values, Object fromEntries

// const person = {
//   name: 'Selah',
//   age: 33,
// };

// ⭐️ key값의 이름과 값이 배열의 형태로 들어 있음
// console.log(Object.entries(person));
// => [Array(2), Array(2)]
// Object.entries(person).forEach((item) => {
//   console.log(item[0], item[1]);
// });

// 배열의 배열에서부터 Object를 만들어줌
// console.log(
//   Object.fromEntries([
//     ['name', 'selah'],
//     ['age', 33],
//     ['hello', true],
//   ])
// );
// => {name: 'selah', age: 33, hello: true}
