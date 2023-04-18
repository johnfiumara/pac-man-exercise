var pos = 0;
const pacArray = [
  ["PacMan1.png", "PacMan2.png"],
  ["PacMan3.png", "PacMan4.png"],
];
var direction = 0;
const pacMen = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}
function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  let game = document.getElementById("game");
  let new_img = document.createElement("img");
  new_img.style.position = "absolute";
  new_img.src = "PacMan1.png";
  new_img.width = 100;
  new_img.style.left = position.x;
  new_img.style.top = position.y;
  game.appendChild(new_img);
  return {
    position,
    velocity,
    new_img,
  };
}

function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.new_img.style.left = item.position.x;
    item.new_img.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.new_img.width >
      window.innerWidth ||
    item.position.x + item.velocity.x < 0
  )
    item.velocity.x = -item.velocity.x;
  if (
    item.position.y + item.velocity.y + item.new_img.height >
      window.innerHeight ||
    item.position.y + item.velocity.y < 0
  )
    item.velocity.y = -item.velocity.y;
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
