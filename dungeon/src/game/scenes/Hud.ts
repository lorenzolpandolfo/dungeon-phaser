import * as Phaser from "phaser";

export class HUD extends Phaser.Scene {
  score: number = 0;

  scoreText: Phaser.GameObjects.Text;

  constructor() {
    super("HUD");
  }

  create() {
    this.scoreText = this.add.text(10, 10, "Pontos: 0");
    const gameScene = this.scene.get("Game");

    gameScene.events.on("updateScore", (s: number) => {
      this.score += s;
      this.scoreText.setText(`Pontos: ${this.score}`);
    });
  }
}
