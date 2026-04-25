import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  preload() {}
  create() {
    this.add.text(100, 100, "Game scene");
  }
}
