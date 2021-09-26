// Logical Or operator

// false: false, '', 0, null, undefined

{
  const name = "Selah";
  const userName = name || "Guest";
  console.log(userName); // <-- Selah
}

{
  const name = null;
  const userName = name || "Guest";
  console.log(userName); // <-- Guest
}

// 위와 같이 할 경우 버그가 발생할 수 있다. 0, '' 일때

{
  const name = ""; // false
  const userName = name || "Guest";
  console.log(userName); // <-- Guest
}

{
  const number = 0; // fasle
  const num = number || "Guest";
  console.log(num); // <-- Guest
}

// 그래서 아래와 같이 사용
// ?? 아예 값이 없을때만

{
  const name = "";
  const userName = name ?? "Guest";
  console.log(userName); // <-- ""
}

{
  const number = 0;
  const num = number ?? "Guest";
  console.log(num); // <-- 0
}
