// at() array에서 찾고 싶은 걸 찾음
const myArr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(myArr[2]); // c
console.log(myArr.at(2)); // c
// 뭐가 다를까???
// at은 끝에서 부터 접근할 수 있음
console.log(myArr[-1]); // undefined
console.log(myArr.at(-1)); // f

// Object.hasOwn(obj, propKey)
// 기존
const userInfo = {
  myName: 'ivanselah',
  isAdmin: 'yes',
};
console.log(userInfo.hasOwnProperty('isAdmin')); // true
console.log('isAdmin' in userInfo); // ture
// 문서에는 대체제라고 명시되어 있음
// 변경
console.log(Object.hasOwn(userInfo, 'isAdmin')); // true

// error.cause
// 에러에 대한 상세 정보를 전달할 수 있으며 string 말고도 여러 타입이 올수 있음
function createError() {
  try {
    throw new Error('DB Connection Failed', {
      cause: {
        error: 'Password is incorrect',
        value: 1234,
        message: ['too short', 'only number not ok'],
      },
    });
  } catch (e) {
    console.log(e.message, e.cause);
  }
}
createError();

// Class Field Declarations
/*  기존
class Counter {
    constructor(){
        this.counter = 0;
    }
}
*/ // 변경
class Counter {
  counter = 0;
}
