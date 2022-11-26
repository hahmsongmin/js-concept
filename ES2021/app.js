// 변수가 falsy일 때 변수에 value 값을 넣을 수 있음
// let yourName = prompt('what is your name');
let yourName;
yourName ||= 'anonymous';
console.log(`Hello ${yourName}`); // Hello anonymous

// 변수가 truly일 때 변수에 value 값을 변경해 줌
const userInfo = {
  username: 'ivanselah',
  password: 1234,
};
userInfo.password &&= '[GOOD PASSWORD]';
userInfo.job ||= 'developer'; // falsy 하기 때문에 만들어줌
console.log(userInfo);

// 변수가 null or undefined인 경우만 falsy라고 판단하고 값을 변경해 줌
userInfo.isAdmin ??= true;
console.log(userInfo);

// Numeric Separators
// 숫자를 읽기 쉽게 구분, 값을 변경하지는 않음 ( 구분 _ )
const superNumber = 1_0_0_000_000_000_000_000;
console.log(superNumber); // 100000000000000000

// replaceAll
// 본래 변수를 변화시키지 않음 (불변성)
const myName = 'ivsanselsah';
const covertMyName = myName.replaceAll('s', '🔥');
console.log(myName, covertMyName); // ivsanselsah iv🔥an🔥el🔥ah
