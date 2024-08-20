const game = document.querySelector(".game-js");
const counter = document.querySelector(".counter-js");
const remove = document.querySelector(".remove-js");

let num = 0;
let count = 0;
game.addEventListener("click", (evt) => {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  const click = evt.target;

  count += 1;
  counter.textContent = count;
  console.log(num);

  num = num === 0 ? 1 : 0;
  num === 1 ? (click.textContent = "X") : (click.textContent = "0");
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
