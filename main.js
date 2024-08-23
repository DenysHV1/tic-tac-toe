const game = document.querySelector(".game-js");
//! game menu
const modal = document.querySelector(".modal-overlay");
function playersMenu() {
  const menuBtnEl = document.querySelector(".menu-js");
  const closeModalButton = document.querySelector(".button-modal-close");
  menuBtnEl.addEventListener("click", () => {
    modal.classList.toggle("is-open");
  });
  closeModalButton.addEventListener("click", () => {
    modal.classList.remove("is-open");
  });
}
playersMenu();

const namePlayer1 = document.querySelector(".gamer-name1-js");
const namePlayer2 = document.querySelector(".gamer-name2-js");
const form = document.querySelector(".modal-form");

//! choice names
form.addEventListener("submit", choiceSettings);
function choiceSettings(event) {
  event.preventDefault();
  const name1 = event.target.elements.userName1.value;
  const name2 = event.target.elements.userName2.value;
  if (name1.length > 10) {
    return;
  }

  if (name2.length > 10) {
    return;
  }
  namePlayer1.textContent = name1;
  namePlayer2.textContent = name2;
  modal.classList.remove("is-open");
}
//! victory counters
const user1 = document.querySelector(".player1-js");
const user2 = document.querySelector(".player2-js");
let victoryCounter1 = 0;
let victoryCounter2 = 0;

//*  place for items
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

//! place for victory line from style
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

//! our moves
const counter = document.querySelector(".counter-js");
let count = 0;

//todo GAME

game.addEventListener("click", oneClick);

function oneClick(evt) {
  const myBtn = evt.target.dataset.id;
  const click = evt.target;

  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  //* only one click to 1 place
  if (click.textContent.length === 1) {
    return;
  }

  //*after last check + 1 to count
  count += 1;
  counter.textContent = count;

  //*main code for game
  num = num === 0 ? 1 : 0;
  num === 1 ? (click.textContent = "❌") : (click.textContent = "⭕");

  //*where were you clicked?
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

  //* victory variants
  if (btn1 === btn2 && btn2 === btn3 && btn1 && btn2 && btn3) {
    victory1.classList.add("is-open");
    game.removeEventListener("click", oneClick);
    if (btn1 === "❌") {
      victoryCounter1 += 1;
      user1.textContent = victoryCounter1;
    }
    if (btn1 === "⭕") {
      victoryCounter2 += 1;
      user2.textContent = victoryCounter2;
    }
  } else if (btn4 === btn5 && btn5 === btn6 && btn4 && btn5 && btn6) {
    victory2.classList.add("is-open");
    game.removeEventListener("click", oneClick);
    if (btn4 === "❌") {
      victoryCounter1 += 1;
      user1.textContent = victoryCounter1;
    }
    if (btn4 === "⭕") {
      victoryCounter2 += 1;
      user2.textContent = victoryCounter2;
    }
  } else if (btn7 === btn8 && btn8 === btn9 && btn7 && btn8 && btn9) {
    victory3.classList.add("is-open");
    game.removeEventListener("click", oneClick);
    if (btn7 === "❌") {
      victoryCounter1 += 1;
      user1.textContent = victoryCounter1;
    }
    if (btn7 === "⭕") {
      victoryCounter2 += 1;
      user2.textContent = victoryCounter2;
    }
  } else if (btn1 === btn4 && btn4 === btn7 && btn1 && btn4 && btn7) {
    victory4.classList.add("is-open");
    game.removeEventListener("click", oneClick);
    if (btn4 === "❌") {
      victoryCounter1 += 1;
      user1.textContent = victoryCounter1;
    }
    if (btn4 === "⭕") {
      victoryCounter2 += 1;
      user2.textContent = victoryCounter2;
    }
  } else if (btn2 === btn5 && btn5 === btn8 && btn2 && btn5 && btn8) {
    victory5.classList.add("is-open");
    game.removeEventListener("click", oneClick);
    if (btn2 === "❌") {
      victoryCounter1 += 1;
      user1.textContent = victoryCounter1;
    }
    if (btn2 === "⭕") {
      victoryCounter2 += 1;
      user2.textContent = victoryCounter2;
    }
  } else if (btn3 === btn6 && btn6 === btn9 && btn3 && btn6 && btn9) {
    victory6.classList.add("is-open");
    game.removeEventListener("click", oneClick);
    if (btn3 === "❌") {
      victoryCounter1 += 1;
      user1.textContent = victoryCounter1;
    }
    if (btn3 === "⭕") {
      victoryCounter2 += 1;
      user2.textContent = victoryCounter2;
    }
  } else if (btn3 === btn5 && btn5 === btn7 && btn3 && btn5 && btn7) {
    victory8.classList.add("is-open");
    game.removeEventListener("click", oneClick);
    if (btn5 === "❌") {
      victoryCounter1 += 1;
      user1.textContent = victoryCounter1;
    }
    if (btn5 === "⭕") {
      victoryCounter2 += 1;
      user2.textContent = victoryCounter2;
    }
  } else if (btn1 === btn5 && btn5 === btn9 && btn1 && btn5 && btn9) {
    victory7.classList.add("is-open");
    game.removeEventListener("click", oneClick);
    if (btn9 === "❌") {
      victoryCounter1 += 1;
      user1.textContent = victoryCounter1;
    }
    if (btn9 === "⭕") {
      victoryCounter2 += 1;
      user2.textContent = victoryCounter2;
    }
  }
  btn = { btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 };
}

removeGame();
const buttons = game.querySelectorAll("button");

//! remove button
function removeGame() {
  const remove = document.querySelector(".remove-js");
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
