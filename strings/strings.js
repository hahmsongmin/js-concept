// --------------------------------------------------
// ⚡ HTML Fragments
// const wrapper = document.querySelector(".wrapper");

// ❌ ES5
// const addWelcome = () => {
//     const div = document.createElement("div");
//     const h1 = document.createElement("h1");
//     h1.innerText = "Hello";
//     div.append(h1);
//     wrapper.append(div);
// };
// setTimeout(addWelcome, 2000);

// JS에서 복잡한 HTML을 생성할 경우(HTML Fragments)
// ✅ ES6 part1

// ` ` <-- 👍 template literal (space, enter도 고려해줌)
// const addWelcome = () => {
//     const div = `
//         <div class="hello">
//             <h1 class="title">Hello</h1>
//         </div>
//     `;
//     wrapper.innerHTML = div;
// };
// setTimeout(addWelcome, 2000);

// ✅ ES6 part2
// join, 문자열을 합치고 ("구분") 구분값으로 나눈다.
// const friends = ["me", "lynn", "dal", "mark"];

// const list = `
//     <h1>People i love</h1>
//     <ul>
//         ${friends.map(friend => `<li>${friend} ❤</li>`).join(" ")}
//     </ul>
// `;
// wrapper.innerHTML = list;

//------------------------------------------------

// ⚡ Cloning Styled Components
// 리액트를 위한 라이브러리(👍 JS에서 CSS를 쓸수 있게 해줌)

// ✅ ES6 part
// styled 함수 하나 만들어 놓으면 적용가능 Styled Components
// const styled = (aElement) => {
//     const el = document.createElement(aElement);
//     return (args) => {
//         const styles = args[0];
//         el.style = styles;
//         return el;
//     }
// };
// const title = styled("h1")`
//     color: blue;
// `;

// const subtitle = styled("span")`
//     font-size: 2rem;
//     font-weight: bold;
//     color: green;
// `;
// title.innerText = "Hello";
// subtitle.innerText = "Good!";
// document.body.append(title, subtitle);

//------------------------------------------------

// ⚡ string method
// ES6 Mothod 3가지 👍 

// ✅ ES6 part1 (String.prototype.includes())
// includes 찾고 싶은 문자가 있는지 확인해줌

// const isEmail = (email) => email.includes("@");
// console.log(isEmail("tft0720@gmail.com"));

// ✅ ES6 part2 (String.prototype.repeat())
// repeat 원하는 어떤 글자는 반복할 수 있음

// const cNumber = "6060";
// const displayName = `${"*".repeat(10)}${cNumber}`;
// console.log(displayName);

// ✅ ES6 part3 (String.prototype.startsWith(), .endsWith())
// ()안에 입력된 문자로 시작하는지, 끝나는지 확인 // 다양하게사용가능

const myName = "Mr.IvanSelah";
console.log(myName.startsWith("Mr."));

//------------------------------------------------
