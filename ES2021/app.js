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
