const game = document.querySelector(".game-js");
const counter = document.querySelector(".counter-js");
const remove = document.querySelector(".remove-js");

let num = 0;
let count = 0;
game.addEventListener("click", (evt) => {
  const myBtn = evt.target.dataset.id;
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  const click = evt.target;

  count += 1;
  counter.textContent = count;
  console.log(num);
  console.dir(myBtn);
  if (click.textContent.length === 1) {
    count -= 1;
    return;
  }
  num = num === 0 ? 1 : 0;
  num === 1 ? (click.textContent = "❌") : (click.textContent = "⭕");

  let btn1 = "";
  let btn2 = "";
  let btn3 = "";
  let btn4 = "";
  let btn5 = "";
  let btn6 = "";
  let btn7 = "";
  let btn8 = "";
  let btn9 = "";

  //* ~~~~~~~~~~~~~~~~~~1
  const promise1 = new Promise((resolve) => {
    if (myBtn === "1") {
      if (click.textContent === "❌") {
        resolve("❌");
      }
      if (click.textContent === "⭕") {
        resolve("⭕");
      }
    }
  });
  promise1.then((item) => {
    btn1 = item;
  });
  //* ~~~~~~~~~~~~~~~~~~2
  const promise2 = new Promise((resolve) => {
    if (myBtn === "2") {
      if (click.textContent === "❌") {
        resolve("❌");
      }
      if (click.textContent === "⭕") {
        resolve("⭕");
      }
    }
  });
  promise2.then((item) => {
    btn2 = item;
  });
  //* ~~~~~~~~~~~~~~~~~~3
  const promise3 = new Promise((resolve) => {
    if (myBtn === "3") {
      if (click.textContent === "❌") {
        resolve("❌");
      }
      if (click.textContent === "⭕") {
        resolve("⭕");
      }
    }
  });
  promise3.then((item) => {
    btn3 = item;
  });
  //* ~~~~~~~~~~~~~~~~~~4
  const promise4 = new Promise((resolve) => {
    if (myBtn === "4") {
      if (click.textContent === "❌") {
        resolve("❌");
      }
      if (click.textContent === "⭕") {
        resolve("⭕");
      }
    }
  });
  promise4.then((item) => {
    btn4 = item;
  });
  //* ~~~~~~~~~~~~~~~~~~5
  const promise5 = new Promise((resolve) => {
    if (myBtn === "5") {
      if (click.textContent === "❌") {
        resolve("❌");
      }
      if (click.textContent === "⭕") {
        resolve("⭕");
      }
    }
  });
  promise5.then((item) => {
    btn5 = item;
  });
  //* ~~~~~~~~~~~~~~~~~~6
  const promise6 = new Promise((resolve) => {
    if (myBtn === "6") {
      if (click.textContent === "❌") {
        resolve("❌");
      }
      if (click.textContent === "⭕") {
        resolve("⭕");
      }
    }
  });
  promise6.then((item) => {
    btn6 = item;
  });
  //* ~~~~~~~~~~~~~~~~~~7
  const promise7 = new Promise((resolve) => {
    if (myBtn === "7") {
      if (click.textContent === "❌") {
        resolve("❌");
      }
      if (click.textContent === "⭕") {
        resolve("⭕");
      }
    }
  });
  promise7.then((item) => {
    btn7 = item;
  });
  //* ~~~~~~~~~~~~~~~~~~8
  const promise8 = new Promise((resolve) => {
    if (myBtn === "8") {
      if (click.textContent === "❌") {
        resolve("❌");
      }
      if (click.textContent === "⭕") {
        resolve("⭕");
      }
    }
  });
  promise8.then((item) => {
    btn8 = item;
  });
  //* ~~~~~~~~~~~~~~~~~~9
  const promise9 = new Promise((resolve) => {
    if (myBtn === "9") {
      if (click.textContent === "❌") {
        resolve("❌");
      }
      if (click.textContent === "⭕") {
        resolve("⭕");
      }
    }
  });
  promise9.then((item) => {
    btn9 = item;
  });
});

const buttons = game.querySelectorAll("button");
remove.addEventListener("click", () => {
  buttons.forEach((item) => {
    item.textContent = "";
    num = 0;
    count = 0;
    counter.textContent = count;
  });
});
