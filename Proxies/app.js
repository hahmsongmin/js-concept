const userObj = {
  username: 'Ivan',
  age: 33,
  password: 1234,
};

const userFilter = {
  get: (target, prop, receiver) => {
    return prop === 'password' ? `${'*'.repeat(5)}` : target[prop];
  },
  set: () => {
    console.log('Somebody is setting');
  },
};

const filteredUser = new Proxy(userObj, userFilter);

// userFilter는 return 값을 바꿔서 전달함
// => 이게 proxy, object 앞에 있는 filter 임
// (즉 중간에 가로채서 컨트롤 함)
// userFilter.username
// userFilter.age
// userFilter.password
