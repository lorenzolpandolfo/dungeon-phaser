import * as Phaser from "phaser";
import MenuButton from "./MenuButton";

export default class NewGameButton extends MenuButton {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "Novo Jogo", {}, () => this.handleNewGame());
  }

  handleNewGame = () => {
    console.log("Novo jogo!");
    this.scene.scene.start("Game");
  };
}
