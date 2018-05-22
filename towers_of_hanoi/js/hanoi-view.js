// const HanoiGame = require("./game.js");

class HanoiView {
  constructor(game, $rootEl) {
    this.game = game;
    this.$rootEl = $rootEl;
    this.setUpTowers();
    this.render();
    $("ul").on("click", (e) => this.clickTower(e));
  }

  setUpTowers() {
    this.$rootEl.html("<ul>1</ul>");
    this.$rootEl.append("<ul>2</ul>");
    this.$rootEl.append("<ul>3</ul>");

    const lists = $("ul");
    // lists.each( (idx) => {
    for (let i = 3; i >= 1; i--) {
      $(lists[0]).append(`<li>${i}</li>`);
    }
  }
  render() {
    this.game.print();
  }
  clickTower(e) {
    let target = e.currentTarget;

    if (this.fromPile != null || this.fromPile != undefined) {
      this.toPile = $(target).index();
      if (this.game.isValidMove(this.fromPile, this.toPile)) {
        this.game.move(this.fromPile, this.toPile);
        this.render();
        if (this.game.isWon()) {
          alert("YOU DID IT");
        }
      } else {
        alert("Nice try bubs.");
      }
      this.fromPile = null;
    } else {
      this.fromPile = $(target).index();
    }
  }
}

module.exports = HanoiView;
