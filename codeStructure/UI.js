import * as PIXI from "./pixi.js";

export class UI extends PIXI.Container {
  constructor() {
    super();

    this.score = 0;

    this.createScoreText();
  }

  createScoreText() {
    const style = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 36,
      fill: "white",
      stroke: "black",
      strokeThickness: 4
    });

    this.scoreText = new PIXI.Text("Score: 0", style);
    this.scoreText.x = 20;
    this.scoreText.y = 20;
    this.addChild(this.scoreText);
  }

  addScore() {
    this.score++;
    this.scoreText.text = "Score: " + this.score;
  }
}
