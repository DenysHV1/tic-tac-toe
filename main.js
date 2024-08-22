const game = document.querySelector(".game-js");
const counter = document.querySelector(".counter-js");
const remove = document.querySelector(".remove-js");

// place for items
let btn = {
  btn1: "",
  btn2: "",
  btn3: "",
  btn4: "",
  btn5: "",
  btn6: "",
  btn7: "",
  btn8: "",
  btn9: "",
};

//place for victory line from style
let victory = game.querySelectorAll("span");

let [
  victory1,
  victory2,
  victory3,
  victory4,
  victory5,
  victory6,
  victory7,
  victory8,
] = victory;

// 0 = ❌; 1 = ⭕;
let num = 0;

//our move
let count = 0;

game.addEventListener("click", oneClick);

function oneClick(evt) {
  const myBtn = evt.target.dataset.id;
  const click = evt.target;

  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

// only one click to 1 place
  if (click.textContent.length === 1) {
    return;
  }

//after last check + 1 to count
  count += 1;
  counter.textContent = count;

//main code for game
  num = num === 0 ? 1 : 0;
  num === 1 ? (click.textContent = "❌") : (click.textContent = "⭕");

//where were you clicked? 
  let { btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 } = btn;
  switch (myBtn) {
    case "1":
      click.textContent === "❌" ? (btn1 = "❌") : (btn1 = "⭕");
      break;
    case "2":
      click.textContent === "❌" ? (btn2 = "❌") : (btn2 = "⭕");
      break;
    case "3":
      click.textContent === "❌" ? (btn3 = "❌") : (btn3 = "⭕");
      break;
    case "4":
      click.textContent === "❌" ? (btn4 = "❌") : (btn4 = "⭕");
      break;
    case "5":
      click.textContent === "❌" ? (btn5 = "❌") : (btn5 = "⭕");
      break;
    case "6":
      click.textContent === "❌" ? (btn6 = "❌") : (btn6 = "⭕");
      break;
    case "7":
      click.textContent === "❌" ? (btn7 = "❌") : (btn7 = "⭕");
      break;
    case "8":
      click.textContent === "❌" ? (btn8 = "❌") : (btn8 = "⭕");
      break;
    case "9":
      click.textContent === "❌" ? (btn9 = "❌") : (btn9 = "⭕");
      break;
  }

// victory variants
  if (btn1 === btn2 && btn2 === btn3 && btn1 && btn2 && btn3) {
    victory1.classList.add("is-open");
    game.removeEventListener("click", oneClick);
  } else if (btn4 === btn5 && btn5 === btn6 && btn4 && btn5 && btn6) {
    victory2.classList.add("is-open");
    game.removeEventListener("click", oneClick);
  } else if (btn7 === btn8 && btn8 === btn9 && btn7 && btn8 && btn9) {
    victory3.classList.add("is-open");
    game.removeEventListener("click", oneClick);
  } else if (btn1 === btn4 && btn4 === btn7 && btn1 && btn4 && btn7) {
    victory4.classList.add("is-open");
    game.removeEventListener("click", oneClick);
  } else if (btn2 === btn5 && btn5 === btn8 && btn2 && btn5 && btn8) {
    victory5.classList.add("is-open");
    game.removeEventListener("click", oneClick);
  } else if (btn3 === btn6 && btn6 === btn9 && btn3 && btn6 && btn9) {
    victory6.classList.add("is-open");
    game.removeEventListener("click", oneClick);
  } else if (btn3 === btn5 && btn5 === btn7 && btn3 && btn5 && btn7) {
    victory8.classList.add("is-open");
    game.removeEventListener("click", oneClick);
  } else if (btn1 === btn5 && btn5 === btn9 && btn1 && btn5 && btn9) {
    victory7.classList.add("is-open");
    game.removeEventListener("click", oneClick);
  }
  btn = { btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 };
}

removeGame();
const buttons = game.querySelectorAll("button");

//remove button
function removeGame() {
  remove.addEventListener("click", () => {
    buttons.forEach((item) => {
      item.textContent = "";
      num = 0;
      count = 0;
      counter.textContent = count;
    });

    victory.forEach((item) => {
      item.classList.remove("is-open");
    });
    game.addEventListener("click", oneClick);
    btn = {
      btn1: "",
      btn2: "",
      btn3: "",
      btn4: "",
      btn5: "",
      btn6: "",
      btn7: "",
      btn8: "",
      btn9: "",
    };
  });
}
