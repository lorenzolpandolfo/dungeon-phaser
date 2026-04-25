import MenuButton from "./MenuButton";

export default class ExitGameButton extends MenuButton {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "Sair", {}, () => this.handleExitGame());
  }

  handleExitGame = () => {
    this.scene.game.destroy(true);
  };
}
