
class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    let pos = [];
    $("li").on("click", e => {
      let el = e.currentTarget;
      const idx = $(el).index();
      if (idx < 3) {
        pos = [0, idx];
      } else if (idx < 6) {
        pos = [1, idx - 3];
      } else {
        pos = [2, idx - 6];
      }
      if (!this.game.board.isEmptyPos(pos)) {
        alert("Invalid position");
      } else {
        this.makeMove($(el));
        this.game.playMove(pos);
        if (this.game.isOver()) {
          alert(`${this.game.board.winner()} wins!`);
        }
      }
    });
  }

  makeMove($square) {
    $square.removeClass("un-marked");
    $square.addClass("mark");
    const mark = this.game.currentPlayer;
    $square.text(mark);
  }

  setupBoard() {
    console.log("in setupBoard");
    this.$el.html("<ul></ul>");
    for (var i = 0; i < 9; i++) {
      $("ul").append("<li></li>");
    }
    $("li").addClass("un-marked");
    this.bindEvents();

  }
}

module.exports = View;
