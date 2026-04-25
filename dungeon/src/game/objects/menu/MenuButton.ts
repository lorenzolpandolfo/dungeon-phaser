import * as Phaser from "phaser";

const defaultStyle = {
  fontFamily: "Arial Black",
  fontSize: 48,
  color: "#ffffff",
  stroke: "#000000",
  strokeThickness: 6,
  align: "center",
};

export default class MenuButton extends Phaser.GameObjects.Text {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    title: string,
    customConfig?: Phaser.Types.GameObjects.Text.TextStyle,
    onClickCallback?: () => void,
  ) {
    const finalConfig = { ...defaultStyle, ...customConfig };

    super(scene, x, y, title, finalConfig);

    scene.add.existing(this);

    this.setInteractive();
    this.setOrigin(0.5);

    this.on("pointerover", () => {
      this.scene.tweens.add({
        targets: this,
        scale: 1.1,
        ease: "Power1",
        duration: 200,
      });
    });

    this.on("pointerout", () => {
      this.scene.tweens.add({
        targets: this,
        scale: 1,
        ease: "Power1",
        duration: 200,
      });
    });

    this.on("pointerdown", () => {
      if (onClickCallback) {
        onClickCallback();
      }
    });
  }
}
