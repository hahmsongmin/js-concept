// --------------------------------------------------
// ⚡ Object Destucturing

// ✅ ES6
// const settings = {
//     color: {
//         theme: "dark"
//     }
// };

// const { notifications : { follow = false } = {}, color } = settings;

// console.log(follow, color);

// --------------------------------------------------
// ⚡ Array Destucturing

// ✅ ES6

// const days = ["Mon", "Tue", "Wed"];

// const [mon, tue, wed, thu = "Thu"] = days;

// console.log(mon, tue, wed, thu);

// --------------------------------------------------
// ⚡ Renaming
    // 요청을 해서 API를 받았는데 이름을 바꿔주고 싶을 때 사용
// ✅ ES6

// const settings = {
//     color: {
//         chosen_color: "dark"
//     }
// };

// let chosenColor = "blue";

// ({  // 만약 값이 존재하지 않으면 설정한 default 값 대입
//     color: { chosen_color : chosenColor = "light" }
// } = settings);

// console.log(chosenColor);

// --------------------------------------------------
// ⚡ function Destucturing

// ✅ ES6

// function saveSettings({notifications, color : { theme }}){
//     console.log(notifications, theme);
// }
// saveSettings({
//     notifications : {
//         follow: true,
//         alert: true,
//         mkt: true,
//     },
//     color: {
//         theme: "blue",
//     }
// })

// --------------------------------------------------
// ⚡ Swapping and Skipping

// ✅ ES6

let mon = "Sat";
let sat = "Mon";
[mon, sat] = [sat, mon];
console.log(mon, sat);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const [,,,,,Sat,Sun] = days;

console.log(Sat, Sun);