function one() {
  const random = Math.floor(Math.random() * 10);

  while (true) {
    let a = +prompt("введите число");
    if (a === random) {
      alert("угадал!");
      break;
    }
    alert(a < random ? "больше!" : "меньше!");
  }
}

function two() {
  for (let i = 1; i < 30; i++) {
    let stars = "  ";
    for (let j = 1; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

function three() {
  let sum = 1;

  for (let i = 1; i <= 5; i++) {
    sum = sum * i;
  }
  console.log(sum);
}

function four() {
  let a = +prompt("введите сторону а");
  let b = +prompt("введите сторону b");
  let c = +prompt("введите сторону с");
  if (b + c > a) {
    alert("треугольник существует");
  } else if (b + a > c) {
    alert("треугольник существует");
  } else if (c + a > b) {
    alert("треугольник существует");
  } else {
    alert("треугольник не существует");
  }
}

function five() {
  let a = +prompt("число от 1 до 12");
  switch (a) {
    case (12, 1, 2):
      alert("зима");
      break;
    case (3, 4, 5):
      alert("весна");
      break;
    case (9, 10, 11):
      alert("осень ");
      break;
    default:
      alert("чо");
  }
}

function dop() {
  for (let i = 1; i < 30; i++) {
    let stars = " ";

    for (let k = 1; k < i; k++) {
      stars += " ";
    }
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
function day() {
  let q = +prompt("число от 1 до 7");
  switch (q) {
    case 1:
      alert("понедельник");
      break;
    case 2:
      alert("вторник");
      break;
    case 3:
      alert("среда");
      break;
    case 4:
      alert("четверг");
      break;
    case 5:
      alert("пятница");
      break;
    case 6:
      alert("суббота");
      break;
    case 7:
      alert("воскресение");
      break;
  }
  if (q > 7 || q < 7) {
    alert("ошибка");
  }
}

function number() {
  let f = +prompt("введите число");
  if (f % 2 == 0) {
    alert("число четное");
  } else {
    alert("число не четное");
  }
  if (f % 3 == 0) {
    alert("число делится на 3");
  } else {
    alert("число не делится на 3");
  }
  if (f % 5 == 0) {
    alert("число делится на 5");
  } else {
    alert("число не делится на 5");
  }
}

function stepen() {
  let a = +prompt("введите число x");
  let b = +prompt("введите число x");

  for (let i = 1; i <= b; i++) {
    console.log(a + " " + "в степени" + " " + i + "=" + a ** i);
  }
  let s = 0;
  for (let n = 0; n <= 100; n++) {
    if (n % 2 == 0) {
      s = s + n;
    }
  }
  console.log("сумма: " + s);
}
