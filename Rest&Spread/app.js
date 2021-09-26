// --------------------------------------------------
// ⚡ Spread

// ✅ ES6

// const friends = [1, 2, 3, 4, 5];
// const family = ["a", "b", "c"];

// console.log([...friends, ...family]);

// const goods = {
//     name: "banana",
//     price: 2500
// };

// const hello = {
//     me : true,
//     hello: "Hello"
// };
// console.log({...goods, ...hello});

// --------------------------------------------------
// ⚡ Spread Applications

// ✅ ES6

// const friends = ["IvanSelah", "lynn"];

// const newFriends = [...friends, "Park"];

// console.log(newFriends);

// const lastName = prompt("Last name");

// const user = {
//     username: "Selah",
//     age: 33,
//     ...(lastName !== "" && { lastName })
// };
// console.log(user);

// --------------------------------------------------
// ⚡ Rest parameters

// ✅ ES6

// const superParameter = (...union) => console.log(union);

// superParameter("1", 2, true, "lalala", false);

// const bestFriends = (firstOne, ...union) => {
//     console.log(`My best is ${firstOne}`)
//     console.log(union)
// };

// bestFriends("nico", "lynn", "dall", "selah");

// 🔨 활용 
// Rest + Spread + Destructure

const user = {
    name: "selah",
    age: 33,
    password: 12345,
};
//1️⃣
const killPassword = ({password, ...rest}) => rest;
const cleanUser = killPassword(user);
console.log(cleanUser);

//2️⃣
// const addCoutry = ({country = "KR", ...rest}) => ({
//     country, ...rest
// })

// console.log(addCoutry(user));

//3️⃣
// const rename = ({name:NAME, ...rest}) => ({
//     NAME, ...rest
// }) 

// console.log(rename(user));

// const reA = ({name:NAME, ...rest}) => ({NAME : "Ivan", ...rest})
// console.log(reA(user));