const View = require("./ttt-view.js");
const Game = require("../solution/game.js");
console.log("Working correctly");
let game = new Game();
$( () => {
  // alert('DOM is loaded');
  const figure = $(".ttt");
  let view = new View(game, figure);

  // Your code here
});
