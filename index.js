"use strict";

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

function ontwo() {
  let array = [1, 2, 3, 4, 5];
  console.log(
    array.map((el) => {
      return el + 2;
    }),
  );
}

function fruits() {
  let array = ["яблоко", "банан", "киви", "ананас"];

  let a = array.filter((array) => array.length > 5);
  console.log(a);
}

function arifm() {
  let n = [10, 20, 30, 40];
  let s = n.reduce((a, c) => a + c, 0);
  console.log(s / n.length);
}

function peoples() {
  let mas = [
    { name: "Анна", age: 22 },
    { name: "Иван", age: 17 },
    { name: "Олег", age: 30 },
  ];
  mas.filter((x) => x.age > 18).forEach((x) => console.log(x.name));
}

function table() {
  let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  a.forEach((element) => {
    console.log(element.join(" "));
  });
}

function unik() {
  let f = (a) => {
    return a.filter((x, i) => a.indexOf(x) === i);
  };
}

// --------------------------------------------------------------

function zadOne() {
  let user = {
    name: "Vasia",
    age: "42",
    email: "vasiatru@gmail.com",
    city: "Podzemelie",
  };
  user.isAdmin = true;
  delete user.age;
  console.log(user);
}

function zadTwo() {
  let car = {
    brand: "toyota",
    model: "Camry",
    engine: {
      power: 150,
      type: "benzin",
    },
  };
  console.log("мощность двигателя: ", car.engine.power);
}

function calcul() {
  let calculator = {
    add: function (a, b) {
      return a + b;
    },
    sub: function (a, b) {
      return a - b;
    },
    mul: function (a, b) {
      return a * b;
    },
    div: function (a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return "error";
      }
    },
  };
  let a = +prompt("введите число а");
  let b = +prompt("введите число b");
  console.log("сложение: ", calculator.add(a, b));
  console.log("вычитание: ", calculator.sub(a, b));
  console.log("Умножение: ", calculator.mul(a, b));
  console.log("Деление: ", calculator.div(a, b));
}

function priceProducts() {
  let products = [
    { name: "Молоко", price: 60 },
    { name: "Хлеб", price: 40 },
    { name: "Сыр", price: 200 },
  ];
  products.forEach((prod) => {
    if (prod.price > 50) {
      console.log(prod.name);
    }
  });

  let sum = 0;
  products.forEach((product) => {
    sum += product.price;
  });

  let srPrice = sum / products.length;
  console.log("средняя цена:" + srPrice);

  products.push({ name: "масло", price: 120 });
  console.log(products);
}

// ------------------------------------------------------------

function date() {
  let d = new Date();
  let a = console.log(
    "сегодня " +
      d.getDate() +
      " " +
      d.getMonth() +
      1 +
      " " +
      d.getFullYear() +
      " года",
  );
}

function nedel() {
  let day = new Date();
  let w = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  let weekday = w[day.getDay()];
  console.log(`сегодня ${weekday}`);
}

function newyear() {
  let day = new Date();
}

//---------------------------------------------------------------------------

function stroka() {
  let a = prompt("введите строку");
  console.log(`длина строки: ${a.length}`);
}

function firstB() {
  let b = prompt("введите имя");
  console.log(b[0].toUpperCase() + b.slice(1));
}

function isFalindrome() {
  let str = prompt();
  console.log(str === str.split("").reverse().join(""));
}

function vremia() {
  let day = new Date();
  console.log(
    ` год: ${day.getFullYear()} месяц: ${day.getMonth() + 1} день: ${day.getDate()}`,
  );
}

function chas() {
  let time = new Date();
  let hours = time.getHours;

  if (hours >= 0 && hours < 6) {
    console.log("ночь");
  } else if (hours >= 6 && hours < 12) {
    console.log("утро");
  } else if (hours >= 12 && hours <= 18) {
    console.log("день");
  } else {
    console.log("вечер");
  }
}

function dantext() {
  let text = " JavaScript — это круто! ";
  console.log(text.trim().toUpperCase());
}

function dataR() {
  let date = prompt("введите дату рождения ГГГГ-ММ-ДД ");
  let now = new Date();
  let b = new Date(date);
  let m = now.getFullYear() - b.getFullYear();
  if (
    now.getMonth() - b.getMonth() < 0 ||
    (now.getMonth() - b.getMonth() === 0 && now.getDate() - b.getDate() < 0)
  ) {
    m--;
  }
  alert(`Вам ${m} лет`);
}
function shotName(fullName) {
  let p = fullName.split(" ");

  //['Иванов'
  // 'Иван'
  // 'Иванович']

  return `${p[0]} ${p[1][0]}. ${p[2][0]}.`;
}
function SN() {
  console.log(shotName("Иванов Иван Иванович"));
}

function countWords(str) {
  if (typeof str !== "string") return 0;

  str = str.trim();
  if (str === "") return 0;

  return [...str].reduce((count, char, i, arr) => {
    return char === " " && arr[i + 1] !== " " ? count + 1 : count;
  }, 1);
}
function wordsK() {
  let str = prompt("введите строку");
  console.log(countWords(str));
}
