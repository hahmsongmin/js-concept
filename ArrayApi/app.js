// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(",");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",", 2);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  // slice 는 원하는 부분만 새로운 배열로 리턴,
  // splice는 배열 자체를 수정
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);
  console.log(array);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // find 함수는 첫번째로 찾아진 것을 리턴
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // 배열중에 해당 조건 있는지 없는지 Boolean 으로 리턴
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // 배열에 있는 모든 요소들이 조건을 충분해야지 true 리턴
  const result1 = students.every((student) => student.score < 50);
  console.log(result1);
}

// Q9. compute students' average score
{
  // reduceRight 는 거꾸로
  // prev 는 이전의 값을 전달(누적), curr 현재
  const result = students.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0); // 0 부터 적용하겠다
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join(",");
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // - 값 리턴시 a 값이 b보다 작다고 간주됨(+앞,-뒤)
    .join(",");
  console.log(result);
}
